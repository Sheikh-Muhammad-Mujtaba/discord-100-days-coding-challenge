// This function takes out the first 10 characters from any text
function extractFirstTenChars(str: string): string {
    // The `substring` method returns a substring of the given string, starting from the specified index and ending at the specified index.
    // Here we use the `substring` method to get the first 10 characters from the input string.
    return str.substring(0, 10); // Gets characters from start to position 10
}

// Example: Taking the first 10 characters of a sentence
// In this example, we use the `extractFirstTenChars` function to get the first 10 characters of the string "Hello, JavaScript world!".
// The `console.log` statement is used to log the result of the function, which is the first 10 characters of the input string.
console.log(extractFirstTenChars("Hello, JavaScript world!")); // Shows the first 10 characters
// It gives us a smaller piece of the original text, just the beginning part.