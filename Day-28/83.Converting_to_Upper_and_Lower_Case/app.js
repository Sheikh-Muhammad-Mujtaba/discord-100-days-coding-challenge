// This function is called `convertCase`. It takes one argument `str` of type `string`.
// This function converts the input string to both uppercase and lowercase,
// and then logs the results to the console.
function convertCase(str) {
    // We convert the input string to uppercase by calling the `toUpperCase` method.
    // This creates a new string with all the characters in uppercase.
    var upperStr = str.toUpperCase();
    // We convert the input string to lowercase by calling the `toLowerCase` method.
    // This creates a new string with all the characters in lowercase.
    var lowerStr = str.toLowerCase();
    // We log the uppercase and lowercase versions of the string to the console,
    // so that the user can see the results.
    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
// We call the `convertCase` function with the string "Hello World" as an argument.
// This line of code logs the uppercase and lowercase versions of the string to the console.
convertCase("Hello World"); // Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"
