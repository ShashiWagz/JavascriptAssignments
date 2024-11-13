'use strict';
function getNumbers() {
const numbers = [];

for (let i = 0; i < 5; i++) {
let num = parseFloat(prompt(`Enter number ${i + 1}:`));


if (!isNaN(num)) {
numbers.push(num);
} else {
  alert("Invalid input. Please enter a valid number.");
  i--; // Repeat this iteration if input is invalid
}
}

let result = "<h3>Numbers in reverse order:</h3><ul>";
for (let i = numbers.length - 1; i >= 0; i--) {
result += `<li>${numbers[i]}</li>`;
}
result += "</ul>";
document.getElementById("result").innerHTML = result;
}
