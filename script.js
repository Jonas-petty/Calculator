const display = document.querySelector("#calculator-display");
const buttons = document.querySelectorAll(".button");
let valueA;
let valueB;
let operator;
let operatorCounter = 0;

function sum(a, b) {
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

function operate(a, b, operation) {
    switch (operation) {
        case "+":
            return sum(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            return "Value invalid";
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log(operatorCounter);

        if (operatorCounter > 0) {
            const displayContent = display.textContent;
            let operation = displayContent.split("+");
            console.log(operation);
        }
        const buttonSelected = event.target.textContent.trim();

        if ("+-/*".includes(buttonSelected)) operatorCounter++;

        display.textContent += buttonSelected;
    });
});
