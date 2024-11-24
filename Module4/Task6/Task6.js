// Attach an event listener to the form submission
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form action (page reload)

    const query = document.getElementById("query").value.trim(); // Get input value and trim whitespace
    const resultsDiv = document.getElementById("results"); // Reference to the results container

    if (!query) {
        resultsDiv.innerHTML = "<p>Please enter a search term.</p>"; // Warn if input is empty
        return;
    }

    // Clear previous results
    resultsDiv.innerHTML = "";

    // Construct the API URL
    const apiUrl = `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`;

    // Fetch data from the API
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then((data) => {
            if (data.total === 0) {
                resultsDiv.innerHTML = "<p>No jokes found for the given term.</p>";
                return;
            }

            // Iterate over each joke in the response
            data.result.forEach((joke) => {
                // Create an <article> element
                const article = document.createElement("article");

                // Create and append <p> for the joke
                const jokeParagraph = document.createElement("p");
                jokeParagraph.textContent = joke.value;
                article.appendChild(jokeParagraph);

                // Append the article to the results container
                resultsDiv.appendChild(article);
            });
        })
        .catch((error) => {
            console.error("Error fetching jokes:", error); // Log any errors
            resultsDiv.innerHTML = "<p>There was an error fetching the jokes. Please try again.</p>";
        });
});
