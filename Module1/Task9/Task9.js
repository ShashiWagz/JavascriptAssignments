'use strict';
function checkPrime() {

        const num = parseInt(prompt("Enter an integer:"), 10);

        function isPrime(n) {
            if (n <= 1) return false; // 1 and below are not prime numbers
            if (n <= 3) return true;  // 2 and 3 are prime numbers
            if (n % 2 === 0 || n % 3 === 0) return false; // divisible by 2 or 3


            for (let i = 5; i * i <= n; i += 6) {
                if (n % i === 0 || n % (i + 2) === 0) return false;
            }
            return true;
        }
        const resultText = isPrime(num)
            ? `${num} is a prime number.`
            : `${num} is not a prime number.`;

        document.getElementById("result").innerHTML = resultText;
    }