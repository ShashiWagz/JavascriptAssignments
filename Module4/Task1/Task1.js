'use strict';
document.getElementById("search-form").addEventListener("submit", function(event) {
       event.preventDefault();

       const query = document.getElementById("query").value; // Get the input value
       const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`; // Construct API URL

       fetch(url)
         .then(response => response.json()) // Parse JSON from response
         .then(data => {
            console.log(data);
         })
         .catch(error => {
           console.error("Error fetching data:", error); // Log errors if any
         });
});