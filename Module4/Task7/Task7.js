// Initialize Leaflet map
const map = L.map("map").setView([60.22, 24.81], 13); // Default view near Karaportti 2
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Fixed destination coordinates for Karaportti 2
const destinationCoords = [60.22356, 24.80583];

// Form submission handler
document.getElementById("address-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const address = document.getElementById("address").value.trim();
    if (!address) {
        alert("Please enter an address.");
        return;
    }

    try {
        // Step 1: Get user coordinates using Digitransit geocoding API
        const geoResponse = await fetch(
            `https://api.digitransit.fi/geocoding/v1/search?text=${encodeURIComponent(address)}`
        );
        if (!geoResponse.ok) throw new Error("Geocoding API error");
        const geoData = await geoResponse.json();

        if (geoData.features.length === 0) {
            alert("Address not found. Please try again.");
            return;
        }

        const userCoords = geoData.features[0].geometry.coordinates; // [lng, lat]

        // Step 2: Get route using Digitransit routing API
        const routeResponse = await fetch(
            `https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `
                    {
                      plan(
                        from: { lat: ${userCoords[1]}, lon: ${userCoords[0]} }
                        to: { lat: ${destinationCoords[0]}, lon: ${destinationCoords[1]} }
                        transportModes: [{ mode: WALK }, { mode: BUS }]
                        numItineraries: 1
                      ) {
                        itineraries {
                          legs {
                            startTime
                            endTime
                            mode
                            from { lat lon name }
                            to { lat lon name }
                            legGeometry { points }
                          }
                        }
                      }
                    }`,
                }),
            }
        );

        if (!routeResponse.ok) throw new Error("Routing API error");
        const routeData = await routeResponse.json();

        const itineraries = routeData.data.plan.itineraries;
        if (itineraries.length === 0) {
            alert("No routes found. Please try a different address.");
            return;
        }

        const legs = itineraries[0].legs;

        // Clear existing map layers
        map.eachLayer((layer) => {
            if (layer instanceof L.Marker || layer instanceof L.Polyline) {
                map.removeLayer(layer);
            }
        });

        // Step 3: Draw the route and set trip details
        let startTime, endTime;
        legs.forEach((leg, index) => {
            const coordinates = decodePolyline(leg.legGeometry.points);

            // Convert timestamps to readable times
            if (index === 0) startTime = new Date(leg.startTime);
            if (index === legs.length - 1) endTime = new Date(leg.endTime);

            // Draw polyline
            L.polyline(coordinates, { color: "blue" }).addTo(map);

            // Add markers for start and end points
            if (index === 0) {
                L.marker([coordinates[0][0], coordinates[0][1]])
                    .addTo(map)
                    .bindPopup("Start: " + leg.from.name);
            }
            if (index === legs.length - 1) {
                L.marker([coordinates[coordinates.length - 1][0], coordinates[coordinates.length - 1][1]])
                    .addTo(map)
                    .bindPopup("End: " + leg.to.name);
            }
        });

        // Set trip info
        document.getElementById("start-time").textContent = startTime.toLocaleTimeString();
        document.getElementById("end-time").textContent = endTime.toLocaleTimeString();

        // Center the map on the route
        map.fitBounds(L.polyline(legs.map((leg) => decodePolyline(leg.legGeometry.points).flat())).getBounds());
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    }
});

// Decode polyline function
function decodePolyline(encoded) {
    let points = [];
    let index = 0,
        lat = 0,
        lng = 0;

    while (index < encoded.length) {
        let b,
            shift = 0,
            result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        const deltaLat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
        lat += deltaLat;

        shift = 0;
        result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
        const deltaLng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
        lng += deltaLng;

        points.push([lat / 1e5, lng / 1e5]);
    }
    return points;
}
