// Defines an object with a 'name' property and a method to return its name
const person = {
    name: "Alice", // Assigns the value "Alice" to the 'name' property of the 'person' object
    getName: function () {
      return this.name; // Uses 'this' to refer to the object itself and return its 'name' property
    },
  };
  
  console.log(person.getName()); // Outputs: Alice
  // This line logs the result of calling the 'getName' method of the 'person' object, which correctly returns the 'name' property value using 'this'.
  