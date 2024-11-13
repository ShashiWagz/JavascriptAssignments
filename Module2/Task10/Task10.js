'use strict';
function announceResults(candidates) {
    candidates.sort((a, b) => b.votes - a.votes);

    console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");

    // Print results
    console.log("Results:");
    for (let i = 0; i < candidates.length; i++) {
        console.log(candidates[i].name + ": " + candidates[i].votes + " votes");
    }
}

let numCandidates = parseInt(prompt("Enter the number of candidates:"));
let candidates = [];

for (let i = 1; i <= numCandidates; i++) {
    let name = prompt("Name for candidate " + i + ":");
    candidates.push({ name: name, votes: 0 });
}

let numVoters = parseInt(prompt("Enter the number of voters:"));

for (let i = 1; i <= numVoters; i++) {
    let vote = prompt("Voter " + i + ", enter the candidate's name to vote (or press Enter for an empty vote):");

    let candidate = candidates.find(c => c.name === vote);
    if (candidate) {
        candidate.votes++;
    }
}
announceResults(candidates);