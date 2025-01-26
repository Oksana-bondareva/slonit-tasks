const operationMultiply = function(num1, num2) {
    return num1 * num2;
}

const operationDivide = function(num1, num2) {
    return num1 / num2;
}

const operationAdd = function(num1, num2) {
    return num1 + num2;
}

const operationSubtract = function(num1, num2) {
    return num1 - num2;
}

const operations = {
    multiply: operationMultiply,
    divide: operationDivide,
    add: operationAdd,
    subtract: operationSubtract,
}

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation])); // 18