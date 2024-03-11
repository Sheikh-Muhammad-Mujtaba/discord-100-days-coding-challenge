"use strict";
let age = 25;
// Check age ranges and provide corresponding messages
if (age < 2) {
    console.log("The person is a baby."); // Display if age is less than 2
}
else if (age < 4) {
    console.log("The person is a toddler."); // Display if age is between 2 and 3
}
else if (age < 13) {
    console.log("The person is a kid."); // Display if age is between 4 and 12
}
else if (age < 20) {
    console.log("The person is a teenager."); // Display if age is between 13 and 19
}
else if (age < 65) {
    console.log("The person is an adult."); // Display if age is between 20 and 64
}
else {
    console.log("The person is an elder."); // Display if age is 65 or older
}
