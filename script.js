// let valueA = +prompt("Value a: ");
// let valueB = +prompt("Value b: ");
// let operator = prompt("operation: ");

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

function operation(a, b, operation) {
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

let valueA = +prompt("Value a: ");
let valueB = +prompt("Value b: ");
let operator = prompt("operation: ");

alert(operation(valueA, valueB, operator));
