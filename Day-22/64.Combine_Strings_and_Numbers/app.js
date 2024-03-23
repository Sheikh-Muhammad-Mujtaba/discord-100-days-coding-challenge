// This function mixes a text and a number into one text
function combineStringAndNumber(text, number) {
    // Joins the text and number into a single text
    // We use the "+" operator to concatenate the input string and number
    // TypeScript automatically coerces the number into a string, so we can append it to the text
    // The result is a single string that contains both the text and the number
    return text + number;
}
// Trying it out with "Age: " and 30
console.log(combineStringAndNumber("Age: ", 30)); // Shows "Age: 30"
// Here, we put together the text "Age: " and the number 30
// The function call to combineStringAndNumber returns the string "Age: 30"
// We then print this string to the console using the console.log() method
