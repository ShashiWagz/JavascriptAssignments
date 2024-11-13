'use strict';
function getUniqueNumbers() {
            const numbers = new Set();

            while (true) {
                let input = parseFloat(prompt("Enter a unique number:"));


                if (isNaN(input)) {
                    alert("Invalid input. Please enter a valid number.");
                    continue;
                }


                if (numbers.has(input)) {
                    alert(`The number ${input} has already been given. Stopping the program.`);
                    break;
                }


                numbers.add(input);
            }

            const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

            console.log("All given numbers in ascending order:");
            for (let number of sortedNumbers) {
                console.log(number);
            }
        }


        document.getElementById("startButton").addEventListener("click", getUniqueNumbers);
