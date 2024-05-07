// Define a type FirstType representing an object with name and age properties
type FirstType = {
    name: string;
    age: number;
  };
  
  // Define a type SecondType representing an object with address and phone properties
  type SecondType = {
    address: string;
    phone: string;
  };
  
  // Define a type CombinedType as an intersection of FirstType and SecondType, containing properties from both types
  type CombinedType = FirstType & SecondType;
  
  // Create an object person of type CombinedType, containing properties from both FirstType and SecondType
  const person: CombinedType = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890",
  };
  