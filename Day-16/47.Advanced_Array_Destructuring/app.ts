// Define an array of laptop objects, each with properties for the make, model, and year of the laptop
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];

// Destructure the first two elements of the 'laptops' array into separate variables 'laptop1' and 'laptop2'
let [laptop1, laptop2, laptop3] = laptops;

// Log the 'laptop1' object to the console
console.log(laptop1);

// Log the 'laptop2' object to the console
console.log(laptop2);

// Log the 'laptop2' object to the console
console.log(laptop3);