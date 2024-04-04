// Generates a random integer between 1 and 10
function getRandomInt(): number {
    // Math.random() returns a random floating-point number between 0 (inclusive) and 1 (exclusive)
    // Multiplying this by 10 gives us a number between 0 (inclusive) and 10 (exclusive)
    const randomNumber: number = Math.random() * 10;

    // Using Math.floor() rounds down the decimal part of the number to give us an integer
    // Adding 1 to the result shifts the range up by 1, so that the generated number is between 1 (inclusive) and 10 (inclusive)
    const randomInt: number = Math.floor(randomNumber) + 1;

    // Returns the generated random integer
    return randomInt;
}

// Outputs a random integer between 1 and 10
console.log(getRandomInt());

// This function combines Math.random() with Math.floor() to create a random integer within our range.
// The range is from 1 to 10 (inclusive on both ends), so the generated number will always be between 1 and 10.