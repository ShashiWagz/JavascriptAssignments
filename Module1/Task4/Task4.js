'use strict'
function sortStudent() {
  const name = prompt("Enter the student's name:");
  const houseNumber = Math.floor(Math.random() * 4) + 1;

  let house;
  switch (houseNumber) {
    case 1:
      house = "Gryffindor";
      break;
  case 2:
      house = "Slytherin";
      break;
  case 3:
      house = "Hufflepuff";
      break;
  case 4:
      house = "Ravenclaw";
      break;
  default:
      house = "Unknown";
        }
document.getElementById("target").innerHTML = `${name}, you are ${house}!`;
}