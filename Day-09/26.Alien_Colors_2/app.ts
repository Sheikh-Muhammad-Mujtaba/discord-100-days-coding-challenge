// Set the alien color to green
let alien_color = "green";

// Check if the alien color is green
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!"); // Display a message if the condition is true
} else {
    console.log("You just earned 10 points."); // Display a different message if the condition is false
}

// Change the alien color to yellow
alien_color = "yellow";

// Check if the alien color is green (condition is false)
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points."); // Display the same alternative message
}
