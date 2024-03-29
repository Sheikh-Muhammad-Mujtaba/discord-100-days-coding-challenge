// This function is called `replaceJavaScriptWithTypeScript`. It takes one argument `sentence` of type `string`.
// This function uses a regular expression to replace all occurrences of the string "JavaScript" in the input sentence with the string "TypeScript".
// The function returns a new string with the replacements made.
function replaceJavaScriptWithTypeScript(sentence: string): string {
    // We use the `replace` method of the `sentence` string to find all occurrences of the string "JavaScript" and replace them with the string "TypeScript".
    // We use a regular expression with the `g` flag to perform a global replacement (i.e., replace all occurrences, not just the first one).
    return sentence.replace(/JavaScript/g, "TypeScript");
}

// We call the `replaceJavaScriptWithTypeScript` function with the string "I love JavaScript and JavaScript is awesome!" as an argument.
// This line of code logs the result of the function to the console.
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));