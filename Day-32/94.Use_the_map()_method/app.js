// Defines an array with some words
var words = ["Hello", "World", "TypeScript", "JavaScript"];
// Uses the .map() method to create a new array with the length of each word
var lengths = words.map(function (word) {
    // The parameter 'word' represents each element in the 'words' array
    // 'word.length' returns the length of the current word
    // The return value becomes a new element in the 'lengths' array
    return word.length;
});
// The console.log() method is used to print the output
console.log(lengths); // Outputs: [5, 5, 10, 10]
// Each number in the new array represents the length of the corresponding word in the original array
