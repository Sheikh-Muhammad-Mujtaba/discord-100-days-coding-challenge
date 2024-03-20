// This code sets up a user profile. It's an immediately invoked function expression (IIFE) that returns an object with a method to display the user's information.
var userProfile = (function () {
    // The user's details are stored in these variables.
    var name = "John";
    var age = 30;
    // This part of the code defines a method that displays the user's information.
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
// We ask the user profile to tell us about the user.
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
