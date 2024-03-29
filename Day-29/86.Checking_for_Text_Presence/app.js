// This function checks if a sentence has "JavaScript" in it
function hasJavaScript(str) {
    // The `includes` method returns true if the given string is a substring of the input string, and false otherwise.
    // Here we use the `includes` method to check if the string "JavaScript" is present in the input string.
    return str.includes("JavaScript");
}
// Example: Seeing if a text mentions JavaScript
// In this example, we use the `hasJavaScript` function to check if the string "I love coding in JavaScript!" contains "JavaScript".
// The `console.log` statement is used to log the result of the function, which is the boolean value indicating whether the string "JavaScript" is present in the input string.
console.log(hasJavaScript("I love coding in tavaScript!")); // Outputs true or false based on the check
// It simply returns true if "JavaScript" is there in the input string, or false if it's not.
