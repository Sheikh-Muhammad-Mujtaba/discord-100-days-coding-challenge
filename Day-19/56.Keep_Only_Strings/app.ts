// Define an array of mixed items (numbers, strings, and a boolean)
let mixedArray = [1, "apple", 2, "banana", true, "carrot"];

// Use the `filter` function to create a new array of only the words (strings)
let stringsArray = mixedArray.filter(item => {
  // Check the type of each item in the array
  // If the item is a string (typeof item === "string"), return true
  // This means the item will be included in the new array
  // If the item is not a string (typeof item !== "string"), return false
  // This means the item will not be included in the new array
  return typeof item === "string";
});

// Show the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line logs the new array of just words to the console.