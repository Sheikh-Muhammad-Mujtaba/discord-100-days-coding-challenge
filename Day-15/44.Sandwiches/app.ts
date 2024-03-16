// Define a function called make_sandwich that takes a variable number of arguments (using the rest operator '...')
// The arguments should be of type string (denoted by 'string[]')
function make_sandwich(...items: string[]): void {
    // Log the message "Making a sandwich with: " followed by the items joined by a comma and a space
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

// Call the make_sandwich function with two items: "ham" and "cheese"
make_sandwich("ham", "cheese");

// Call the make_sandwich function with three items: "turkey", "lettuce", and "tomato"
make_sandwich("turkey", "lettuce", "tomato");

// Call the make_sandwich function with four items: "avocado", "sprouts", "mustard", and "mayo"
make_sandwich("avocado", "sprouts", "mustard", "mayo");