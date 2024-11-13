'use strict';
function startVoting() {
            // Step 1: Ask for the number of candidates
            const numCandidates = parseInt(prompt("Enter the number of candidates:"), 10);
            const candidates = [];

            // Step 2: Collect candidate names and initialize vote counts
            for (let i = 1; i <= numCandidates; i++) {
                const name = prompt(`Enter name for candidate ${i}:`);
                candidates.push({ name: name, votes: 0 });
            }

            // Step 3: Ask for the number of voters
            const numVoters = parseInt(prompt("Enter the number of voters:"), 10);

            // Step 4: Conduct voting by asking each voter for their choice
            for (let i = 1; i <= numVoters; i++) {
                const vote = prompt(`Voter ${i}, enter the candidate's name you want to vote for (leave blank for no vote):`).trim();

                // Find the candidate and increase their vote count if the name matches
                const candidate = candidates.find(candidate => candidate.name.toLowerCase() === vote.toLowerCase());
                if (candidate) {
                    candidate.votes += 1;
                }
            }

            // Step 5: Sort candidates by votes in descending order
            candidates.sort((a, b) => b.votes - a.votes);

            // Step 6: Determine the winner (the first candidate in the sorted array)
            const winner = candidates[0];

            // Step 7: Print results to the console
            console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
            console.log("Results:");
            candidates.forEach(candidate => {
                console.log(`${candidate.name}: ${candidate.votes} votes`);
            });
        }