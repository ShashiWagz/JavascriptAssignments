
const names = ['John', 'Paul', 'Jones'];

// Select the target element
const targetElement = document.getElementById('target');

// Use a for-loop to create list items
let listItems = ''; // Variable to hold the HTML for the list items
for (let i = 0; i < names.length; i++) {
    listItems += `<li>${names[i]}</li>`; // Add each name as a list item
}

// Set the innerHTML of the target element
targetElement.innerHTML = listItems;

