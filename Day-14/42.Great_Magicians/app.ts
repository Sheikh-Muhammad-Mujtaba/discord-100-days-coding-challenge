// Declare an array of strings called "magicians" and initialize it with three names.
let magicians: string[] = ["Alice", "David", "Chris"];

// Define a function called "show_magicians" that takes an array of strings as a parameter.
function show_magicians(magicians: string[]) {
    // Use the forEach method to iterate over each magician in the array.
    // For each magician, log their name to the console.
    magicians.forEach(magician => {
        console.log(magician);
    });
}

/** 
 * Adds "the Great" to the names of magicians in the provided array.
 *  An array of magician names.
 */
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

// Example usage:
// Modify the original array by adding "the Great" to each magician's name.
make_great(magicians);

// Display the modified magician names using the "show_magicians" function.
show_magicians(magicians);
