// This function returns a random boolean value
function getRandomBoolean(): boolean {
    // Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
    // By comparing this random number to 0.5, we effectively get a true or false value randomly
    return Math.random() > 0.5; // Returns true if the random number is greater than 0.5
}

console.log(getRandomBoolean()); // Outputs either true or false randomly