// An array of magician names
var magicians = ["Alice", "David", "Chris"];
// A function that takes an array of magician names as input
// and returns a new array with each magician name appended with " the Great"
function make_great(magicians) {
    // Create an empty array to store the great magicians
    var greatMagicians = [];
    // Iterate over each magician in the input array
    magicians.forEach(function (magician) {
        // Append " the Great" to the magician's name
        // and add the new name to the greatMagicians array
        greatMagicians.push("".concat(magician, " the Great"));
    });
    // Return the array of great magicians
    return greatMagicians;
}
// Create a new array with the original magicians
var greatMagicians = make_great(magicians.slice());
// Function to display the magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Display the original magicians
console.log("Original magicians:");
show_magicians(magicians);
// Display the great magicians
console.log("Great magicians:");
show_magicians(greatMagicians);
