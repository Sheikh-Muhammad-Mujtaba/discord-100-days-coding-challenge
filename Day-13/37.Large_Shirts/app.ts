// Define a function called "make_shirt" that takes two parameters:
// - "size": A string representing the size of the t-shirt (default value is "large").
// - "message": A string representing the message to be printed on the t-shirt (default value is "I love TypeScript").
function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    // Log a message to the console, indicating the t-shirt size and the custom message.
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

// Call the "make_shirt" function with default values for both size and message.
make_shirt(); // Output: "Making a large t-shirt with the message 'I love TypeScript' printed on it."

// Call the "make_shirt" function with a custom size ("medium") and the default message.
make_shirt("medium"); // Output: "Making a medium t-shirt with the message 'I love TypeScript' printed on it."

// Call the "make_shirt" function with a custom size ("small") and a custom message ("Dive into Coding").
make_shirt("small", "Dive into Coding"); // Output: "Making a small t-shirt with the message 'Dive into Coding' printed on it."
