'use strict';
 function rollDice() {
            return Math.floor(Math.random() * 6) + 1;
        }

        // Main program to roll the dice until the result is 6
        function rollUntilSix() {
            const rollResults = document.getElementById("rollResults");
            let rollResult;

            // Keep rolling the dice until the result is 6
            do {
                rollResult = rollDice();
                // Create a new list item for each roll result and append to the unordered list
                const listItem = document.createElement("li");
                listItem.textContent = `Roll result: ${rollResult}`;
                rollResults.appendChild(listItem);
            } while (rollResult !== 6); // Stop when the result is 6
        }


        document.getElementById("rollButton").addEventListener("click", rollUntilSix);
