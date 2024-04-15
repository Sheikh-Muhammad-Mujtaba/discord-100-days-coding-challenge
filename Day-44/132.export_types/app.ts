// Importing named exports:
import { utilOne, utilTwo } from "./utils";

// Importing a default export:
import Calculator from "./Calculator";

// This code illustrates the syntax and usage differences between default and named exports.

// Perform utilOne and utilTwo functions
console.log(utilOne()); // Outputs: "This is utility one."
console.log(utilTwo()); // Outputs: "This is utility two."

// Create a new instance of Calculator
const calc = new Calculator();

// Perform some arithmetic operations using Calculator
console.log(calc.add(5, 3)); // Outputs: 8
console.log(calc.subtract(10, 4)); // Outputs: 6
console.log(calc.multiply(2, 6)); // Outputs: 12
console.log(calc.divide(15, 3)); // Outputs: 5
console.log(calc.getResult()); // Outputs: 5

// Clear the result
calc.clear();
console.log(calc.getResult()); // Outputs: 0
