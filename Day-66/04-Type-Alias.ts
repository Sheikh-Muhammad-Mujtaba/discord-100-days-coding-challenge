// Define a type alias MyString for string
type MyString = string;

// Declare a variable myName of type MyString and assign it the value "Glitcher"
let myName: MyString = "Glitcher";

// Define a union type MyStringOrNumber for string or number
type MyStringOrNumber = string | number;

// Declare a variable myValue of type MyStringOrNumber and assign it the value 10
let myValue: MyStringOrNumber = 10;

// Define an Employee type representing an employee object with name, age, and an optional email
type Employee = {
  name: string;
  age: number;
  email?: string; // Optional property
};

// Create an employee object alice with name, age, and email properties
const alice: Employee = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

// Create an employee object bob with name and age properties
const bob: Employee = {
  name: "Bob",
  age: 25,
};

// Log the employee objects alice and bob to the console
console.log(alice);
console.log(bob);
