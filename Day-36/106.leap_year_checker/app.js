function isLeapYear(year) {
    // Leap year is divisible by 4 but not by 100 unless it's also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
// Test the function
var yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
    console.log("".concat(yearToCheck, " is a leap year."));
}
else {
    console.log("".concat(yearToCheck, " is not a leap year."));
}
console.log(isLeapYear(2024));
