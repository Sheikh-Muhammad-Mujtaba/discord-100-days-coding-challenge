// This code sets up a user profile. It's an immediately invoked function expression (IIFE) that returns an object with a method to display the user's information.
let userProfile = (function() {
    // The user's details are stored in these variables.
    let name = "John";
    let age = 30;

    // This part of the code defines a method that displays the user's information.
    return {
        // The method is called 'displayInfo' and is a function that, when called, logs the user's name and age.
        displayInfo: function() {
            // The user's name and age are logged using template literals, which allow us to interpolate variables into a string.
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

// We ask the user profile to tell us about the user.
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.