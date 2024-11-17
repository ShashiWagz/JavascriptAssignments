'use strict';

// Select the <p> and <img> elements by their IDs
const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

// Event listener for mouseover event
trigger.addEventListener('mouseover', () => {
  // Change the image source to picB.jpg when mouse is over the <p> element
  target.src = 'picB.jpg';
});

// Event listener for mouseout event
trigger.addEventListener('mouseout', () => {
  // Change the image source back to picA.jpg when mouse leaves the <p> element
  target.src = 'picA.jpg';
});
