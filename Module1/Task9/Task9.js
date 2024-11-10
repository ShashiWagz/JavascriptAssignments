
 let number = parseInt(prompt("Enter an integer:"), 10);


 function isPrime(num) {
   if (num <= 1) return false; // numbers less than or equal to 1 are not prime
   if (num === 2) return true; // 2 is the only even prime number
   if (num % 2 === 0) return false; // other even numbers are not prime

   for (let i = 3; i <= Math.sqrt(num); i += 2) {
     if (num % i === 0) return false;
   }
   return true;
 }

 if (isPrime(number)) {
   document.body.innerHTML = `<p>${number} is a prime number.</p>`;
 } else {
   document.body.innerHTML = `<p>${number} is not a prime number.</p>`;
 }