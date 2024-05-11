
// Declaration Syntax:

// Interface
interface PersonExInterface {
    name: string;
    age: number;
  }
  
  // Type
  type PersonExType = {
    name: string;
    age: number;
  };
  
  // Extending And Implementing:
  
  // Interface
  interface AnimalExInterface {
    type: string;
  }
  
  // Interface extending another interface
  interface Dog extends AnimalExInterface {
    bark(): void;
  }
  
  // Class implementing an interface
  class Labrador implements Dog {
    type: string = "dog";
    bark() {
      console.log("Woof!");
    }
  }
  
  // Type
  type AnimalExType = {
    type: string;
  };
  
  // Type combining properties of other types
  type Monkey = AnimalExType & {
    bark(): void;
  };
  
  // Object implementing a type
  const labrador: Monkey = {
    type: "monkey",
    bark() {
      console.log("Woof!");
    },
  };
  
  // Compatibility:
  
  // Interface merging
  interface Car {
    brand: string;
  }
  
  // Interface merging adding new properties
  interface Car {
    model: string;
  }
  
  // Object adhering to the merged interface
  const myCar: Car = {
    brand: "Toyota",
    model: "Camry",
  };
  