// This function finds the leftover of dividing two numbers
function remainder(num1: number, num2: number): number {
    // Gives back the leftover of num1 divided by num2
    // The modulo operator (%) calculates the remainder of the division of num1 by num2
    return num1 % num2;
}

// Trying it with 5 divided by 2
console.log(remainder(5, 2)); // Shows 1
// This tells us the leftover, which is 1 here.
// Using the remainder function, we can calculate the number of elements left over after dividing a number of elements into a certain number of groups.

// Trying it with 10 elements divided by 3 groups
console.log(remainder(10, 3)); // Shows 1
// This tells us the number of elements left over after dividing 10 elements into 3 groups.