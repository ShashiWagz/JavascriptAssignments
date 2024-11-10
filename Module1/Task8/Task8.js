 function findLeapYears() {
        // Prompt the user for the start and end years
        const startYear = parseInt(prompt("Enter the start year:"), 10);
        const endYear = parseInt(prompt("Enter the end year:"), 10);

        // Function to check if a year is a leap year
        function isLeapYear(year) {
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        }

        // Collect all leap years in the specified range
        let leapYears = [];
        for (let year = startYear; year <= endYear; year++) {
            if (isLeapYear(year)) {
                leapYears.push(year);
            }
        }

        // Generate HTML for the unordered list of leap years
        let listHTML = "<ul>";
        leapYears.forEach(year => {
            listHTML += `<li>${year}</li>`;
        });
        listHTML += "</ul>";

        // Display the result in the HTML document
        document.getElementById("target").innerHTML = listHTML;
    }