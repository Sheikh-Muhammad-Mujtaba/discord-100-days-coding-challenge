// This function simulates rolling a dice and returns a number between 1 and 6
function rollDice(): number {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();

    // Multiply the random number by 6 to get a number between 0 and 6
    const randomNumberMultiplied = randomNumber * 6;

    // Round down the result to the nearest integer to get a number between 0 and 5
    const randomNumberFloored = Math.floor(randomNumberMultiplied);

    // Add 1 to the result to get a number between 1 and 6
    const diceResult = randomNumberFloored + 1;

    // Return the dice result
    return diceResult;
}

console.log(rollDice()); // Outputs a random number between 1 and 6