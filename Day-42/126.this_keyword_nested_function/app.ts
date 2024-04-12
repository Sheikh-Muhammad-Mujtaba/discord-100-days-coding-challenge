// Demonstrates 'this' behavior change in a nested function
const myObject = {
    property: "Value", // Assigns the value "Value" to the 'property' property of the 'myObject' object
    outerMethod: function () {
      console.log(this.property); // Works as expected, logs "Value"
  
      const innerMethod = () => {
        console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
      };
  
      innerMethod(); // Calls the innerMethod
    },
  };
  
  myObject.outerMethod(); // Invokes the outerMethod of the 'myObject' object
  // This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.
  