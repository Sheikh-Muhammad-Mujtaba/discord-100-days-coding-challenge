// Define an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// Iterate through each number in the array
numbers.forEach(function (number) {
    // Initialize a variable to store the suffix (default is "th")
    var suffix = "th";
    // Check if the number is 1, 2, or 3 to determine the appropriate suffix
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    // Print the number along with its suffix
    console.log("".concat(number).concat(suffix));
});
