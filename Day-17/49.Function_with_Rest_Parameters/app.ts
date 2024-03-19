// Defines a function called 'logHobbies' that accepts an arbitrary number of arguments of type 'string'
function logHobbies(...hobbies: string[]) {
    // Loops through each hobby in the array using the 'forEach' method
    hobbies.forEach(hobby => {
        // Logs a string to the console that includes the hobby
        // The string is formatted using template literals, which allows for string interpolation
        console.log(`I enjoy ${hobby}.`);
    });
}

// Calls the 'logHobbies' function with three hobbies as arguments
logHobbies("reading", "hiking", "cooking");