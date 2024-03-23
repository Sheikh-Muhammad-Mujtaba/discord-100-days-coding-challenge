// This function checks if both inputs are true
function checkBothTrue(val1, val2) {
    // Only says true if both val1 and val2 are true
    // The logical AND operator (&&) checks if both val1 and val2 are true. If either val1 or val2 is false,
    // then the result of the logical AND operation will be false.
    return val1 && val2;
}
// Trying it with true and false
console.log(checkBothTrue(true, false)); // Shows false
// This checks if both val1 and val2 are true, but since val2 is false, the result of the check is false.
// The `console.log` method is used to print the result of the function to the console.
// Trying it with two true values
console.log(checkBothTrue(true, true)); // Shows true
// This checks if both val1 and val2 are true, and since both val1 and val2 are true, the result of the check is true.
// The `console.log` method is used to print the result of the function to the console.
