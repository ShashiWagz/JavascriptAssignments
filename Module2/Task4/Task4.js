'use strict';
function getNumbers() {
            const numbers = [];

            while (true) {
                let input = parseFloat(prompt("Enter a number (or 0 to stop):"));


                if (input === 0) {
                    break;
                }


                if (!isNaN(input)) {
                    numbers.push(input);
                } else {
                    alert("Invalid input. Please enter a valid number.");
                }
            }


            numbers.sort((a, b) => b - a);


            console.log("Numbers in descending order:");
            for (let number of numbers) {
                console.log(number);
            }
        }


        document.getElementById("startButton").addEventListener("click", getNumbers);
