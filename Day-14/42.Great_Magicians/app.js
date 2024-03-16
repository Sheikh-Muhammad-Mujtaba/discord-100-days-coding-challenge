// Declare an array of strings called "magicians" and initialize it with three names.
var magicians = ["Alice", "David", "Chris"];
// Define a function called "show_magicians" that takes an array of strings as a parameter.
function show_magicians(magicians) {
    // Use the forEach method to iterate over each magician in the array.
    // For each magician, log their name to the console.
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
/**
 * Adds "the Great" to the names of magicians in the provided array.
 *  An array of magician names.
 */
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
// Example usage:
// Modify the original array by adding "the Great" to each magician's name.
make_great(magicians);
// Display the modified magician names using the "show_magicians" function.
show_magicians(magicians);
