// This function removes the last element from an array and returns it
function removeLastElement<T>(arr: T[]): T | undefined {
    // The "pop" method is used to remove and return the last element of the array
    return arr.pop();
}

// Example: Removing the last fruit from the array
// Declares an array of strings with three elements
const fruits: string[] = ["Apple", "Banana", "Cherry"];

// Calls the "removeLastElement" function and passes the "fruits" array as an argument
// The function returns the last element of the array ("Cherry"), which is then printed to the console
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'

// Prints the updated array to the console
console.log(fruits); // Outputs: ['Apple', 'Banana']

// Here, we take out the last fruit and show the updated list.