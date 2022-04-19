// DOM elements
const clearButton = document.querySelector(".clear-button");
const numberButton = document.querySelectorAll(".number-button");
const deleteButton = document.querySelector(".delete-button");
const operatorButton = document.querySelectorAll(".operator-button");
const decimalButton = document.querySelector(".decimal-button");
const equalsButton = document.querySelector(".equals-button");
const currentOperand = document.querySelector(".bottom-screen");
const previousOperand = document.querySelector(".top-screen");
const page = document.querySelector("body");

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
    } else if (operator === "x") {
       return multiply(a, b);
    } else if (operator === "÷") {
       return divide(a, b);
    }
}

// Update calculator display when numbers are clicked
let displayedNumber = "";
let firstEquationNumber = "";
let clickedOperator = "";
let result = "";

numberButton.forEach((number) => {
    number.addEventListener("click", function () {
        displayedNumber += number.value;
        currentOperand.textContent = displayedNumber;
    })
})

// Add decimal button functionality
decimalButton.addEventListener("click", function () {
    displayedNumber += decimalButton.value;
    currentOperand.textContent = displayedNumber;
})

// Update top screen of calculator when an operator is clicked
operatorButton.forEach((operator) => {
    operator.addEventListener("click", function () {
        if (firstEquationNumber && displayedNumber) {
            calculateResult();
        }
        firstEquationNumber = displayedNumber;
        clickedOperator = operator.textContent;
        previousOperand.textContent = firstEquationNumber + clickedOperator;
        displayedNumber = "";
        currentOperand.textContent = "";
    })
})

// Run calculation when equals key is clicked
equalsButton.addEventListener("click", function () {
    calculateResult();
})

function calculateResult() {
    if (!firstEquationNumber || !displayedNumber) {
        return;
    }
    if (clickedOperator === "÷" && displayedNumber === "0") {
        currentOperand.textContent = "Nice Try ;)"
        return;
    }
    result = parseFloat(operate(clickedOperator, parseFloat(firstEquationNumber), parseFloat(displayedNumber)).toFixed(4));
    currentOperand.textContent = result;
    previousOperand.textContent = firstEquationNumber + " " + clickedOperator + " " + displayedNumber;
    displayedNumber = result;
    firstEquationNumber = "";
}

// Clear data when AC is clicked
clearButton.addEventListener("click", function() {
    displayedNumber = "";
    firstEquationNumber = "";
    clickedOperator = "";
    result = "";
    currentOperand.textContent = "";
    previousOperand.textContent = "";
})

// Delete a character from the calculator's display when delete button is clicked
deleteButton.addEventListener("click", function() {
    let temp = "";
    temp = displayedNumber.slice(0, -1);
    displayedNumber = temp;
    currentOperand.textContent = displayedNumber;
})

decimalButton.addEventListener("click", function () {

})