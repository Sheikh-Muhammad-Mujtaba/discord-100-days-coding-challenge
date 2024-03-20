// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Use the `map` function to create a new array of doubled numbers
let doubledNumbers = numbers.map(number => {
  // For each number in the original array, return its double
  return number * 2;
});

// Log the new array of doubled numbers to the console
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// This code uses the `map` function to create a new array of doubled numbers.
// The `map` function takes a callback function as its argument, which is called once for each element in the original array.
// The callback function should return a new value for each element, which is then added to the new array.
// In this case, the callback function multiplies each number by 2 to double it.
// Finally, the new array of doubled numbers is logged to the console.