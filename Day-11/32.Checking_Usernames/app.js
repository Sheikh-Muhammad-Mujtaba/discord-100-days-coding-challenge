"use strict";
// Define an array of current users
let current_users = ["user1", "admin", "user3", "user4", "user5"];
// Define an array of new users
let new_users = ["User1", "User6", "user7", "admin", "User9"];
// Iterate through each new user
new_users.forEach(newUser => {
    // Check if the new user's lowercase version exists in the current users array
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        // If the username already exists, prompt the new user to choose a different username
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        // Otherwise, inform the new user that the chosen username is available
        console.log(`${newUser} is available.`);
    }
});
