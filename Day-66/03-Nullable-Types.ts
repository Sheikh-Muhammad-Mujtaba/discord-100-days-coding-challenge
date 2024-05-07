let username: string | null = "Glicher"; // The variable can hold a string or null
let ageEx: number | null = null; // The variable can hold a number or null

function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest!"); // Log a message for a null username
    } else {
        console.log(`Hello, ${username}!`); // Log a personalized greeting
    }
}

greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null);     // Output: Hello, Guest!
