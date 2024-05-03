// Prompt the user to input their age
let age = prompt("What is your age", "");

// Check if the age is within the range of 14 to 90 (inclusive)
if (age >= 14 && age <= 90) {
  // If the age is within the range, display a message indicating so
  alert("You are in the age range.");
} else {
  // If the age is outside the range, display a message indicating so
  alert("You are not in the age range.");
}
