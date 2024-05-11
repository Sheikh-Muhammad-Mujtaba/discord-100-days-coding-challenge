// Define an interface named PersonEx2 with properties 'name' and 'age', and a method 'greet' that takes a string parameter and returns void.
interface PersonEx2 {
  name: string;
  age: number;
  greet(message: string): void;
}

// Create an object named Sarah that adheres to the PersonEx2 interface.
const Sarah: PersonEx2 = {
  name: "Sarah",
  age: 30,
  // Implement the greet method that logs a message using the object's name and the provided message.
  greet(message: string) {
    console.log(`${this.name} says: ${message}`);
  },
};

// Call the greet method on the Sarah object, passing a message as an argument.
Sarah.greet("Hello, TypeScript!"); // Output: Sarah says: Hello, TypeScript!
