// Initialize the variable 'car' with the value 'subaru'
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False
// // Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Test 1: Check if 'car' is not equal to 'honda'
console.log("Is car is equal to 'honda'? I predict False.");
console.log(car != 'honda'); // False
// Test 2: Check if 'car' is strictly equal to 'subaru'
console.log("Is car equal to 'subaru'? I predict True.");
console.log(car === 'subaru'); // True (strict equality)
// Test 3: Check if 'car' is strictly equal to 'Subaru'
console.log("Is car equal to 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False (strict equality)
// Test 4: Check if the length of 'car' is greater than 5
console.log("Is car length greater than 5? I predict False.");
console.log(car.length < 5); // False
// Test 5: Check if the length of 'car' is less than or equal to 7
console.log("Is car length less than or equal to 7? I predict True.");
console.log(car.length <= 7); // True
// Test 6: Check if 'car' is not an empty string
console.log("Is car not an empty string? I predict True.");
console.log(car !== ''); // True
// Test 7: Check if 'car' contains the letter 'b'
console.log("Does car contain the letter 'b'? I predict False.");
console.log(car.includes('z')); // False
// Test 8: Check if 'car' starts with the letter 's'
console.log("Does car start with the letter 's'? I predict True.");
console.log(car.startsWith('s')); // True
// Test 9: Check if 'car' ends with the letter 'u'
console.log("Does car end with the letter 'u'? I predict True.");
console.log(car.endsWith('u')); // True
// Test 10: Check if 'car' is uppercase
console.log("Is car in uppercase? I predict False.");
console.log(car === car.toUpperCase()); // False
