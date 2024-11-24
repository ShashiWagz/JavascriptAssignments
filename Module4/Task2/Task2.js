// Attach an event listener to the form submission
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form action (page reload)

    // Retrieve the value entered in the input field
    const query = document.getElementById("query").value.trim();
    if (!query) {
        console.warn("Please enter a TV series name."); // Warn if the input is empty
        return;
    }

    // Construct the TVMaze API URL
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    // Fetch data from the API
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then((data) => {
            console.log("Search Results:", data); // Display the results in the console
        })
        .catch((error) => {
            console.error("Error fetching data from the API:", error); // Log any errors
        });
});
