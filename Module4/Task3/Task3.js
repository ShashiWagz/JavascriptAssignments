// Attach an event listener to the form submission
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form action (page reload)

    const query = document.getElementById("query").value.trim(); // Get input value and trim whitespace
    const resultsDiv = document.getElementById("results"); // Reference to the results container

    if (!query) {
        console.warn("Please enter a TV series name."); // Warn if the input is empty
        return;
    }

    // Clear old results
    resultsDiv.innerHTML = '';

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
            if (data.length === 0) {
                resultsDiv.innerHTML = '<p>No results found.</p>';
                return;
            }

            // Iterate over each TV show in the response
            data.forEach((tvShow) => {
                const { show } = tvShow; // Extract the show object

                // Create an <article> element
                const article = document.createElement("article");

                // Create and append <h2> for the name
                const nameElement = document.createElement("h2");
                nameElement.textContent = show.name;
                article.appendChild(nameElement);

                // Create and append <a> for the URL
                if (show.url) {
                    const linkElement = document.createElement("a");
                    linkElement.href = show.url;
                    linkElement.target = "_blank";
                    linkElement.textContent = "Details";
                    article.appendChild(linkElement);
                }

                // Create and append <img> for the medium image
                if (show.image?.medium) {
                    const imgElement = document.createElement("img");
                    imgElement.src = show.image.medium;
                    imgElement.alt = show.name;
                    article.appendChild(imgElement);
                }

                // Create and append <div> for the summary
                if (show.summary) {
                    const summaryElement = document.createElement("div");
                    summaryElement.innerHTML = show.summary; // Directly insert HTML (safe from API)
                    article.appendChild(summaryElement);
                }

                // Append the article to the results container
                resultsDiv.appendChild(article);
            });
        })
        .catch((error) => {
            console.error("Error fetching data from the API:", error); // Log any errors
            resultsDiv.innerHTML = '<p>There was an error fetching the results. Please try again.</p>';
        });
});
