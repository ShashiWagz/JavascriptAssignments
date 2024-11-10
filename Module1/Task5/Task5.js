 function checkLeapYear() {
    const year = parseInt(prompt("Enter a year:"), 10);
    let isLeapYear;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      isLeapYear = true;
        } else {
           isLeapYear = false;
        }

        // Display the result in the HTML document
        document.getElementById("result").innerHTML =
            `${year} is ${isLeapYear ? "a leap year" : "not a leap year"}.`;
    }