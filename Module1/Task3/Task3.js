'use strict';
function calculate() {
  const num1 = parseInt(prompt("Enter the first integer:"), 10);
  const num2 = parseInt(prompt("Enter the second integer:"), 10);
  const num3 = parseInt(prompt("Enter the third integer:"), 10);


  const sum = num1 + num2 + num3;
  const product = num1 * num2 * num3;
  const average = sum / 3;

  document.getElementById("target").innerHTML = `
  Sum: ${sum} <br>
  Product: ${product} <br>
  Average: ${average.toFixed(2)}`;
  
}