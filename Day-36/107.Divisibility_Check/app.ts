function isDivisibleBy2And3(num: number): boolean {
    return num % 2 === 0 && num % 3 === 0;
}

// Test the function
const numberToCheck = 12;
if (isDivisibleBy2And3(numberToCheck)) {
    console.log(`${numberToCheck} is divisible by both 2 and 3.`);
} else {
    console.log(`${numberToCheck} is not divisible by both 2 and 3.`);
}

console.log(isDivisibleBy2And3(12));
