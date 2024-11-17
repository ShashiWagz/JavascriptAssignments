// Select the target element
const targetElement = document.getElementById('target');

// Create the first list item
const firstItem = document.createElement('li');
firstItem.textContent = 'First item';

// Create the second list item
const secondItem = document.createElement('li');
secondItem.textContent = 'Second item';
secondItem.classList.add('my-item'); // Add class 'my-item' to the second list item

// Create the third list item
const thirdItem = document.createElement('li');
thirdItem.textContent = 'Third item';

// Append all list items to the target element
targetElement.appendChild(firstItem);
targetElement.appendChild(secondItem);
targetElement.appendChild(thirdItem);
