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

// Call the "show_magicians" function, passing in the "magicians" array.
// This will display the names of the magicians in the console.
show_magicians(magicians);
