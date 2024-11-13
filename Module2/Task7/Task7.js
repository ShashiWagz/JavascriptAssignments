'use strict';
function rollDice(sides) {
            return Math.floor(Math.random() * sides) + 1;
        }

        function rollUntilMax() {
            const rollResults = document.getElementById("rollResults");
            const sides = parseInt(document.getElementById("sides").value); // Get the number of sides from the input
            let rollResult;



            do {
                rollResult = rollDice(sides);
                // Create a new list item for each roll result and append it to the unordered list
                const listItem = document.createElement("li");
                listItem.textContent = `Roll result: ${rollResult}`;
                rollResults.appendChild(listItem);
            } while (rollResult !== sides); // Stop when the result is equal to the number of sides (max number)
        }


        document.getElementById("rollButton").addEventListener("click", rollUntilMax);
