'use strict';
function concat(arr) {
            let result = '';
            for (let i = 0; i < arr.length; i++) {
                result += arr[i]; // Concatenate each string in the array
            }
            return result;
        }
        const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
        const concatenatedString = concat(names);
        document.getElementById("result").textContent = `Concatenated String: ${concatenatedString}`;