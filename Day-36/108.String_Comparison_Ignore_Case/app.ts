function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
    // Convert both strings to lowercase and then compare
    return str1.toLowerCase() === str2.toLowerCase();
}

// Test the function
const string1 = "Hello";
const string2 = "hello";
if (areStringsEqualIgnoreCase(string1, string2)) {
    console.log("The strings are identical, ignoring case sensitivity.");
} else {
    console.log("The strings are not identical, considering case sensitivity.");
}

console.log(areStringsEqualIgnoreCase("hello", "Hello")); // Outputs: true
console.log(areStringsEqualIgnoreCase("World", "Word")); // Outputs: false
// We make both strings lowercase to ensure the comparison ignores case differences.