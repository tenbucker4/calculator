// DOM elements
const clearButton = document.querySelector(".clear-button");
const numberButton = document.querySelectorAll(".number-button");
const deleteButton = document.querySelector(".delete-button");
const operatorButton = document.querySelectorAll(".operator-button");
const decimalButton = document.querySelector(".decimal-button");
const equalsButton = document.querySelector(".equals-button");
const currentOperand = document.querySelector(".bottom-screen");
const previousOperand = document.querySelector(".top-screen");

currentOperand.textContent = "";
previousOperand.textContent = "";


// Add, subtract, multiply and divide functions, and a function to call each one.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
       return subtract(a, b);
    } else if (operator === "*") {
       return multiply(a, b);
    } else if (operator === "/") {
       return divide(a, b);
    }
}

// Update calculator display when numbers are clicked
let storedNumber = "";

numberButton.forEach((number) => {
    number.addEventListener("click", function () {
        storedNumber += number.value;
        currentOperand.textContent = storedNumber;
    })
})