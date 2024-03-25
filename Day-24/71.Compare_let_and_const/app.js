// Using `let` for a variable that can be reassigned
var age = 25;
// Reassigning `age` to 26 using `let` (which allows reassignment)
age = 26;
console.log(age); // Shows 26
// Trying to reassign a `const`-declared variable
var nameofperson = "Alice";
// Attempting to reassign `name` to "Bob" using `const` (which prevents reassignment)
try {
    nameofperson = "Bob"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.
