// Define a function called 'createObjectWithDynamicKey' that takes two arguments:
// - key: a string representing the name of the property to be added to the object
// - value: a string representing the value of the property to be added to the object
function createObjectWithDynamicKey(key: string, value: string) {
    // Create an empty object called 'dynamicObject'
    let dynamicObject = {};

    // Add a property to the 'dynamicObject' object with the name specified by the 'key' argument
    // and the value specified by the 'value' argument
    dynamicObject[key] = value;

    // Return the 'dynamicObject' object
    return dynamicObject;
}

// Use the 'createObjectWithDynamicKey' function to create an object with a property
// named 'theme' and a value of 'dark'
let userPreference = createObjectWithDynamicKey("theme", "dark");

// Log the 'userPreference' object to the console
console.log(userPreference);