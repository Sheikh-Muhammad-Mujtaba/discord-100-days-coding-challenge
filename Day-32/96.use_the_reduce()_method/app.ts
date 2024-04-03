// This function calculates the sum of all numbers in an array
function calculateSum(numbers: number[]): number {
    // The reduce() method is used to iterate over each element in the array
    // The function takes an accumulator (initial value is 0) and a current value
    // The accumulator is initialized as the first value of the array, and the current value is the second value
    // The function returns the sum of the accumulator and the current value
    // On the next iteration, the accumulator will have the previous value of accumulator + current value,
    // and the current value will be the third value of the array
    // This process continues until the end of the array
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Example: Calculating the sum of an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// The console.log() method is used to print the output
console.log(calculateSum(numbers)); // Outputs: 15
// The sum of all numbers in the array is calculated, resulting in a single sum value.