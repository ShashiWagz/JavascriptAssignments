'use strict';
function getParticipants() {
  let numberOfParticipants = parseInt(prompt("Enter the number of participants:"));
  if (isNaN(numberOfParticipants) || numberOfParticipants <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }
  const participants = [];
  for (let i = 0; i < numberOfParticipants; i++) {
    let name = prompt(`Enter the name of participant ${i + 1}:`);
    if (name && name.trim() !== "") {
      participants.push(name.trim());
    } else {
      alert("Name cannot be empty. Please enter a valid name.");
    }
  }
  participants.sort();
  let listHTML = "<h3>Participant List (Alphabetical Order):</h3><ol>";
  for (let name of participants) {
    listHTML += `<li>${name}</li>`;
  }
  listHTML += "</ol>";
  document.getElementById("participant-list").innerHTML = listHTML;
}
document.getElementById("enterParticipantsButton").addEventListener("click", getParticipants);
