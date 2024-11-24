// Function to fetch and log a random Chuck Norris joke
function fetchRandomJoke() {
    const apiUrl = "https://api.chucknorris.io/jokes/random";

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then((data) => {
            console.log("Random Chuck Norris Joke:", data.value); // Log the joke to the console
        })
        .catch((error) => {
            console.error("Error fetching joke:", error); // Log any errors
        });
}

// Call the function to fetch the joke
fetchRandomJoke();