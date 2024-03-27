// This function greets a user by name, or greets an anonymous user if no name is provided
function greetUser(name: string = "anonymous") {
    // The 'name' parameter is optional and defaults to the string "anonymous"
    // if it is not provided.

    // Says hello to the given name or to an anonymous user
    console.log(`Hello, ${name}!`);
    // Uses template literals to insert the value of the 'name' variable
    // into a string, and logs the result to the console.
}

// Trying the function with a name and without
greetUser("Alice"); // Outputs: Hello, Alice!
// Calling the function with the argument "Alice" to be used as the name.

greetUser(); // Outputs: Hello, anonymous!
// Calling the function without any arguments, so the default value of the 'name'
// parameter is used as the name.

// We see how our function can say hello to someone by name, or just say hello if we don't know the name.
// This comment describes the behavior of the function that we have just observed.