"use strict";
// Store a person's name in a variable
let name_cases = "Alice";
// Print that person's name in lowercase, uppercase, and titlecase
console.log(name_cases.toLowerCase()); // alice
console.log(name_cases.toUpperCase()); // ALICE
console.log(name_cases[0].toUpperCase() + name_cases.slice(1).toLowerCase()); // Alice
