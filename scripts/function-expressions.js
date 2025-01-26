const operations = {
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
}

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation])); // 18