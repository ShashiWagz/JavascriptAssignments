'use strict';
function calculateProbability() {
        // Ask the user for the number of dice and the desired sum
        const numDice = parseInt(prompt("Enter the number of dice:"), 10);
        const targetSum = parseInt(prompt("Enter the target sum of dice rolls:"), 10);

        // Validate input to ensure they are positive integers
        if (isNaN(numDice) || numDice <= 0 || isNaN(targetSum) || targetSum <= 0) {
            document.getElementById("target").innerHTML =
                "Please enter valid positive integers for the number of dice and target sum.";
            return;
        }

        // Define the number of simulations
        const simulations = 10000;
        let successCount = 0;

        // Function to roll the dice and calculate the sum
        function rollDiceAndSum() {
            let sum = 0;
            for (let i = 0; i < numDice; i++) {
                sum += Math.floor(Math.random() * 6) + 1;
            }
            return sum;
        }

        // Run the simulation
        for (let i = 0; i < simulations; i++) {
            if (rollDiceAndSum() === targetSum) {
                successCount++;
            }
        }

        // Calculate the probability
        const probability = (successCount / simulations) * 100;

        // Display the result
        document.getElementById("target").innerHTML =
            `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`;
    }