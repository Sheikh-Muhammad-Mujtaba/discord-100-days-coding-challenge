// Define an array of numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Iterate through each number in the array
numbers.forEach(number => {
    // Initialize a variable to store the suffix (default is "th")
    let suffix = "th";

    // Check if the number is 1, 2, or 3 to determine the appropriate suffix
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }

    // Print the number along with its suffix
    console.log(`${number}${suffix}`);
});
