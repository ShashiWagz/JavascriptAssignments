'use strict';
function even(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
const originalArray = [2, 7, 4];
const evenArray = even(originalArray);
console.log("Original Array:", originalArray);
console.log("Even Numbers Array:", evenArray);