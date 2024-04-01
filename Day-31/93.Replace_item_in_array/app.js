// This function finds "Banana" in the fruits array and replaces it with "Mango"
// The function takes an array of strings as an argument and does not return a value
function replaceBananaWithMango(fruits) {
    // Finds the index of the first occurrence of "Banana" in the array
    // If "Banana" is not found in the array, the "indexOf" method returns -1
    var index = fruits.indexOf("Banana");
    // If "Banana" is found in the array, the "index" variable contains the index of the first occurrence
    // The "index" variable is assigned the value "undefined" if "Banana" is not found in the array
    // If "Banana" is found in the array, replace it with "Mango"
    if (index !== -1) {
        // The "fruits" array is modified at the index of the first occurrence of "Banana"
        // The "fruits[index]" notation is used to access the element at the specified index
        // The "=" operator is used to assign the new value to the element at the specified index
        fruits[index] = "Mango";
    }
}
// Example: Replacing "Banana" in the array
// Declares an array of strings with three elements
var fruits = ["Apple", "Banana", "Cherry"];
// Calls the "replaceBananaWithMango" function and passes the "fruits" array as an argument
replaceBananaWithMango(fruits);
// Prints the updated array to the console
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.
