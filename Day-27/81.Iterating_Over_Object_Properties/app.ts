// This function shows every detail about an object
function logObjectProperties(obj: object) {
    // The function takes an object as a parameter, which can be any object type
   

    for (let property in obj) {
        // Loops through each property in the object
        // The for...in loop is used to iterate over the properties of an object


        console.log(`${property}: ${obj[property]}`);
        // Shows the property name and its value
        // The property name is assigned to the variable "property"
        // The value of the property is then accessed using "obj[property]"
        // The ${property} and ${obj[property]} are then combined using template literals
    }
}

// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
// It tells us each piece of information stored about the car.
// The function is called using the car object