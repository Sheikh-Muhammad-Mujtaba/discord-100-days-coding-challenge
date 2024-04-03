// This function takes an array of numbers and returns a new array containing only the numbers that are greater than 10
function filterGreaterThanTen(numbers: number[]): number[] {
    // The filter() method is used to create a new array with all elements that pass the test implemented by the provided function
    return numbers.filter(number => {
        // The parameter 'number' represents each element in the 'numbers' array

        // The test implemented by the provided function checks if the current number is greater than 10
        // If the test is true, the current number is added to the new array
        return number > 10;
    });
}

// Example: Filtering an array of numbers
const numbers: number[] = [5, 10, 15, 20, 25];

// The function filterGreaterThanTen() is called with the numbers array as an argument
// The returned value is assigned to the 'result' variable
const result: number[] = filterGreaterThanTen(numbers);

// The console.log() method is used to print the output
console.log(result); // Outputs: [15, 20, 25]

// The new array contains only the numbers that are greater than 10