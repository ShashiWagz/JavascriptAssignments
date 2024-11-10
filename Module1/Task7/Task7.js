'use strict';
function rollDice() {
        // Prompt the user for the number of dice rolls
        const numRolls = parseInt(prompt("Enter the number of dice rolls:"), 10);

        // Validate the input to ensure it is a positive integer
        if (isNaN(numRolls) || numRolls <= 0) {
            document.getElementById("target").innerHTML =
                "Please enter a valid positive integer for the number of rolls.";
            return;
        }

        // Initialize the sum of dice rolls
        let sum = 0;

        // Roll the dice 'numRolls' times
        for (let i = 0; i < numRolls; i++) {
            // Generate a random number between 1 and 6
            const roll = Math.floor(Math.random() * 6) + 1;
            sum += roll;
        }

        // Display the result in the HTML document
        document.getElementById("target").innerHTML =
            `The sum of the dice rolls is: ${sum}`;
    }