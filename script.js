const display = document.querySelector("#calculator-display");
const buttons = document.querySelectorAll(".button");

const OPERATORS = "+-/*=";
const EQUALS = "=";

let firstValue = 0;
let operator = null;
let waitingSecond = false;
let lastSecondValue = 0;

document.addEventListener("DOMContentLoaded", () => {
    updateDisplay("0");
});

// operations
const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (a === 0 || b === 0 ? "Error" : a / b),
};

function operate(a, b, operation) {
    if (!operations[operation]) return "Invalid";
    return operations[operation](a, b);
}

function updateDisplay(value) {
    display.textContent = `${value}`;
}

function appendDisplay(value) {
    if (display.textContent == "0") {
        display.textContent = `${value}`;
    } else {
        display.textContent += `${value}`;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const pressedButton = event.target.textContent.trim();
        if (pressedButton == "AC") {
            updateDisplay("0");
        } else {
            appendDisplay(pressedButton);
            firstValue = Number(display.textContent.trim());
            console.log(firstValue);
        }
    });
});
