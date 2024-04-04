// This function generates a random hexadecimal color code
function getRandomHexColor(): string {
    // Generate a random number between 0 and 16777215 (decimal equivalent of FFFFFF in hexadecimal)
    const randomNumber = Math.floor(Math.random() * 0xFFFFFF);

    // Convert the random number to a hexadecimal string
    const hexString = randomNumber.toString(16);

    // Ensure the hex string is 6 characters long by padding it with leading zeros if necessary
    const color = '#' + hexString.padStart(6, '0');

    // Return the random color code
    return color;
}

console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12