'use strict';

// Select the required elements by their IDs
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const result = document.getElementById('result');
const calculateButton = document.getElementById('calculate');

// Event listener for the calculate button
calculateButton.addEventListener('click', () => {
  // Get the values of the input fields and the selected operation
  const number1 = parseFloat(num1.value);
  const number2 = parseFloat(num2.value);
  const selectedOperation = operation.value;

  let calculationResult;

  // Perform calculation based on the selected operation
  if (selectedOperation === 'add') {
    calculationResult = number1 + number2;
  } else if (selectedOperation === 'subtract') {
    calculationResult = number1 - number2;
  } else if (selectedOperation === 'multiply') {
    calculationResult = number1 * number2;
  } else if (selectedOperation === 'divide') {
    if (number2 !== 0) {
      calculationResult = number1 / number2;
    } else {
      calculationResult = 'Cannot divide by zero';
    }
  }

  // Display the result in the <p> element
  result.textContent = `Result: ${calculationResult}`;
});
