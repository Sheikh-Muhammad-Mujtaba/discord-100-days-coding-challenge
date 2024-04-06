function isDivisibleBy2And3(num) {
    return num % 2 === 0 && num % 3 === 0;
}
// Test the function
var numberToCheck = 12;
if (isDivisibleBy2And3(numberToCheck)) {
    console.log("".concat(numberToCheck, " is divisible by both 2 and 3."));
}
else {
    console.log("".concat(numberToCheck, " is not divisible by both 2 and 3."));
}
console.log(isDivisibleBy2And3(12));
