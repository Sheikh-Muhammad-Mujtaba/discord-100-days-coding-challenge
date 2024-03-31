// This function checks if a value is Not a Number (NaN)
function isValueNaN(value: any): boolean {
    // The isNaN() function is used to check if the passed value is NaN or not
    // It returns true if the value is NaN, and false otherwise
    return isNaN(value);
}

// Examples: Checking different values
// Checking if a string is NaN
console.log(isValueNaN("hello")); // Outputs: true

// Checking if a number is NaN
console.log(isValueNaN(123)); // Outputs: false

// This way, we can guard against unexpected non-numeric values in our calculations or inputs.
// It's important to note that the isNaN() function can sometimes return unexpected results,
// so it's recommended to use the Number.isNaN() function instead when possible.