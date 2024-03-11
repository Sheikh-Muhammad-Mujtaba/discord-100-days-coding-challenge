"use strict";
// Green alien version:
let alien_color = "green";
if (alien_color == "green") {
    console.log("You earned 5 points."); // Display a message if the condition is true
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points."); // Display a different message if the condition is true
}
else if (alien_color == "red") {
    console.log("You earned 15 points."); // Display another different message if the condition is true
}
// Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You earned 5 points."); // No output because the condition is false
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points."); // Display a message if the condition is true
}
else if (alien_color == "red") {
    console.log("You earned 15 points."); // No output because the condition is false
}
// Red alien version:
alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points."); // No output because the condition is false
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points."); // No output because the condition is false
}
else if (alien_color == "red") {
    console.log("You earned 15 points."); // Display a message if the condition is true
}
