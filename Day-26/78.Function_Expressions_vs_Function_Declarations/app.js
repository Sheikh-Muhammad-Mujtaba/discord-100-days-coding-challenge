// Function declaration for squaring a number
// We define a function named 'squareDeclaration' that takes a number parameter and returns a number.
function squareDeclaration(number) {
    return number * number;
}
// Function expression for squaring a number
// We define a constant variable named 'squareExpression' that is assigned a function expression that takes a number parameter and returns a number.
var squareExpression = function (number) {
    return number * number;
};
// Using both functions to square the number 4
// We test the functions by passing them the number 4 and logging the result to the console.
console.log(squareDeclaration(4)); // Outputs: 16
console.log(squareExpression(4)); // Outputs: 16
// Both methods give us the same result, showing two different ways to create functions that do the same thing.
