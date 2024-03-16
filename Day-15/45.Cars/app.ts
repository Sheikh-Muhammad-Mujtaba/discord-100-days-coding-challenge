// Define a function called make_car that takes three arguments:
// manufacturer (of type string), model (of type string), and options (using the rest operator '...')
// The options argument is an array of arrays, where each sub-array contains a string and any value
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    // Create an object called car with the manufacturer and model properties
    let car: Object = { manufacturer, model };

    // Iterate over each option in the options array
    options.forEach(([key, value]) => {
        // Add each option to the car object as a property with the given key and value
        car[key] = value;
    });

    // Return the car object
    return car;
}

// Call the make_car function with the arguments "Toyota", "Corolla", [["color", "red"]], and [["year", 2020]]
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));

// Call the make_car function with the arguments "Ford", "Fiesta", [["color", "blue"]], and [["sunroof", true]]
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));