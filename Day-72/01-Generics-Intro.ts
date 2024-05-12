// A generic function that returns the input value as is
function returnType<T>(val: T): T {
    return val;
  }
  
  // Usage of the generic function with different types
  const numValue: number = returnType<number>(100); // Returns a number
  const strValue: string = returnType<string>("Elzero"); // Returns a string
  const boolValue: boolean = returnType<boolean>(true); // Returns a boolean
  const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]); // Returns an array of numbers
  
  console.log(`Number Value: ${numValue}`);
  console.log(`String Value: ${strValue}`);
  console.log(`Boolean Value: ${boolValue}`);
  console.log(`Array Value: ${arrValue}`);
  