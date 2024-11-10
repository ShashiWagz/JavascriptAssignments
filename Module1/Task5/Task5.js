'use strict';
function checkLeapYear() {
  const year = parseInt(prompt("Enter a year:"), 10);
  let isLeapYear;
  isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  document.getElementById("result").innerHTML = `${year} is ${isLeapYear ? "a leap year" : "not a leap year"}.`;
    }