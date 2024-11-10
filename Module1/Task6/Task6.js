'use strict';
function calculateSquareRoot() {

        const shouldCalculate = confirm("Should I calculate the square root?");


        if (shouldCalculate) {
            const number = parseFloat(prompt("Enter a number:"));


            if (number < 0) {
                document.getElementById("target").innerHTML =
                    "The square root of a negative number is not defined.";
            } else {

                const squareRoot = Math.sqrt(number);
                document.getElementById("target").innerHTML =
                    `The square root of ${number} is ${squareRoot}.`;
            }
        } else {

            document.getElementById("target").innerHTML =
                "The square root is not calculated.";
        }
    }