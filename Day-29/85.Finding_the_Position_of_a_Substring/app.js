// This function finds where "code" first shows up in a text
function findCodePosition(str) {
    // The `indexOf` method looks for the string "code" in the given text `str`
    // and returns the index of the first character of the first occurrence of the string "code"
    // If the string is not found, it returns -1
    return str.indexOf("code");
}
// Example: Searching within a sentence
console.log(findCodePosition("Learn to code with JavaScript"));
// Outputs the start position of "code" in the text
// It tells us the position number where "code" starts in the text
