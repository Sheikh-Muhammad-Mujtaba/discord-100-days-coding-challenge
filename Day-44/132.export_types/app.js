"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing named exports:
var utils_1 = require("./utils");
// Importing a default export:
var Calculator_1 = require("./Calculator");
// This code illustrates the syntax and usage differences between default and named exports.
// Perform utilOne and utilTwo functions
console.log((0, utils_1.utilOne)()); // Outputs: "This is utility one."
console.log((0, utils_1.utilTwo)()); // Outputs: "This is utility two."
// Create a new instance of Calculator
var calc = new Calculator_1.default();
// Perform some arithmetic operations using Calculator
console.log(calc.add(5, 3)); // Outputs: 8
console.log(calc.subtract(10, 4)); // Outputs: 6
console.log(calc.multiply(2, 6)); // Outputs: 12
console.log(calc.divide(15, 3)); // Outputs: 5
console.log(calc.getResult()); // Outputs: 5
// Clear the result
calc.clear();
console.log(calc.getResult()); // Outputs: 0
