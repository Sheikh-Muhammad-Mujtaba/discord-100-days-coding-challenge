

// Declaring a variable with type annotations for an object
let personExOne: {
    name: string;
    age: number;
    jobTitle?: string; // Optional property
    address: {
      street: string;
      city: string;
    };
  };
  
  // Assigning a value to the variable
  personExOne = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
      street: "123 Main St",
      city: "Wonderland",
    },
  };
  
  // Alternatively, combining declaration and assignment
  let personExTwo: {
    name: string;
    age: number;
    jobTitle?: string; // Optional property
    address: {
      street: string;
      city: string;
    };
  } = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
      street: "123 Main St",
      city: "Wonderland",
    },
  };
  