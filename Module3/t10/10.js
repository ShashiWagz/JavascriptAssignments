// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the form by its id
    const form = document.getElementById("name-form");

    // Add an event listener for the form's submit event
    form.addEventListener("submit", function(event) {
        // Prevent the form from submitting and refreshing the page
        event.preventDefault();

        // Use querySelector to get input values using attribute selectors
        const firstName = document.querySelector('input[type="text"][id="first-name"]').value;
        const lastName = document.querySelector('input[type="text"][id="last-name"]').value;

        // Display the result in the <p id="target">
        document.getElementById("target").innerText = `Your name is ${firstName} ${lastName}`;
    });
});
