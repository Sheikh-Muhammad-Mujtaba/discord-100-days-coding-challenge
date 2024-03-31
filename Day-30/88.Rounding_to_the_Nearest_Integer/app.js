// This function takes a number as an argument and returns the nearest integer
function roundToNearestInteger(num) {
    // The built-in Math.round() function is used to round the number to the nearest integer
    return Math.round(num); // Returns the rounded number
}
// Example: Rounding a decimal
console.log(roundToNearestInteger(4.7)); // Outputs: 5
// This shows that the function rounds numbers up
console.log(roundToNearestInteger(4.4)); // Outputs: 4
// This shows that the function rounds numbers down
