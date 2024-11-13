'use strict';

function getDogNames() {
            const dogNames = [];


            for (let i = 0; i < 6; i++) {
                let name = prompt(`Enter the name of dog ${i + 1}:`);


                if (name && name.trim() !== "") {
                    dogNames.push(name.trim());
                } else {
                    alert("Name cannot be empty. Please enter a valid name.");
                    i--; // Repeat the iteration if the name is empty
                }
            }


            dogNames.sort().reverse();


            let listHTML = "<h3>Dog Names in Reverse Alphabetical Order:</h3><ul>";
            for (let name of dogNames) {
                listHTML += `<li>${name}</li>`;
            }
            listHTML += "</ul>";

            document.getElementById("dog-list").innerHTML = listHTML;
        }


        document.getElementById("enterDogNamesButton").addEventListener("click", getDogNames);