const display = document.querySelector("#calculator-display");
const buttons = document.querySelectorAll(".button");

const OPERATORS = "+-/*=";
const EQUALS = "=";

let firstValue = 0;
let secondValue = 0;
let operator = null;
let waitingSecond = false;
let cleanDisplay = false;

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

function reset() {
    firstValue = 0;
    secondValue = 0;
    operator = null;
    waitingSecond = false;
    cleanDisplay = false;
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const pressedButton = event.target.textContent.trim();
        if (pressedButton == "AC") {
            updateDisplay("0");
            reset();
        } else {
            if (OPERATORS.includes(pressedButton)) {
                if ((firstValue && secondValue) || pressedButton === "=") {
                    const result = operate(firstValue, secondValue, operator);
                    updateDisplay(result);
                    firstValue = result;
                    secondValue = 0;
                    operator = pressedButton;
                    cleanDisplay = true;
                } else {
                    operator = pressedButton;
                    waitingSecond = true;
                    cleanDisplay = true;
                }
            } else {
                if (cleanDisplay && display.textContent != "0") {
                    updateDisplay("0");
                    cleanDisplay = false;
                }
                appendDisplay(pressedButton);
                waitingSecond
                    ? (secondValue = Number(display.textContent.trim()))
                    : (firstValue = Number(display.textContent.trim()));
            }
        }
    });
});
