// This function takes a string as an argument and converts it to a number
function convertStringToNumber(str: string): number {
  return parseFloat(str); // The built-in parseFloat() function is used to convert the string to a number
}

// Example: Turning a numeric string into a real number
console.log(convertStringToNumber("123.45")); // Outputs: 123.45
// This shows that the function can convert a string with a decimal value to a number

console.log(convertStringToNumber("98")); // Outputs: 98
// This shows that the function can also convert a string with a whole number value to a number

// We're taking strings that look like numbers and turning them into actual numbers, which can be useful in various calculations.
