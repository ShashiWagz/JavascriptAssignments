// Add event listener to the "Calculate" button after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const calcButton = document.getElementById("calculate-btn");

    // When the button is clicked, call the calculate function
    calcButton.addEventListener("click", calculate);
});

function calculate() {
    // Get the calculation string from the input field
    let calc = document.getElementById("calculation").value.trim();

    // Check if the input contains any valid operator
    if (calc.includes('+')) {
        let operands = calc.split('+');
        let result = parseInt(operands[0]) + parseInt(operands[1]);
        document.getElementById("result").innerText = `Result: ${result}`;
    } else if (calc.includes('-')) {
        let operands = calc.split('-');
        let result = parseInt(operands[0]) - parseInt(operands[1]);
        document.getElementById("result").innerText = `Result: ${result}`;
    } else if (calc.includes('*')) {
        let operands = calc.split('*');
        let result = parseInt(operands[0]) * parseInt(operands[1]);
        document.getElementById("result").innerText = `Result: ${result}`;
    } else if (calc.includes('/')) {
        let operands = calc.split('/');
        // Handle division by zero
        if (parseInt(operands[1]) === 0) {
            document.getElementById("result").innerText = "Cannot divide by zero.";
        } else {
            let result = parseInt(operands[0]) / parseInt(operands[1]);
            document.getElementById("result").innerText = `Result: ${result}`;
        }
    } else {
        document.getElementById("result").innerText = "Invalid input. Please use one of the following operators: +, -, *, /.";
    }
}
