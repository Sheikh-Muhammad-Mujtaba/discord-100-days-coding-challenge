// Defines a function called 'logHobbies' that accepts an arbitrary number of arguments of type 'string'
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    // Loops through each hobby in the array using the 'forEach' method
    hobbies.forEach(function (hobby) {
        // Logs a string to the console that includes the hobby
        // The string is formatted using template literals, which allows for string interpolation
        console.log("I enjoy ".concat(hobby, "."));
    });
}
// Calls the 'logHobbies' function with three hobbies as arguments
logHobbies("reading", "hiking", "cooking");
