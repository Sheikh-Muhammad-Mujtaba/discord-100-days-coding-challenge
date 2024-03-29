// This function is called `stringLength`. It takes one argument `str` of type `string`.
// This function returns a `number` representing the number of characters in the input string.
function stringLength(str: string): number {
    // The `str.length` property returns the number of characters in the string.
    // We return this value as the result of the function.
    return str.length;
}

// We call the `stringLength` function with the string "Maddy" as an argument.
// Since the function returns the number of characters in the string,
console.log(stringLength("Maddy")); // Outputs: 5
// Now we test our function on another string...
console.log(stringLength("Bob"));   // Outputs: 3