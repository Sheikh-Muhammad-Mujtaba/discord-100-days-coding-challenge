// This function takes two decimal numbers as arguments
function multiplyDecimals(num1, num2) {
    // Multiply the numbers and round the result to two decimal places
    // Multiplying two decimal numbers may result in a very small decimal number
    // To make the result easier to read and understand, we round it to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}
// Trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1, 0.2)); // Shows 0.02
// After multiplying 0.1 and 0.2, we round the result to two decimal places to make it easier to read
