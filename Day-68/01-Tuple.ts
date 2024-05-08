// Defining a tuple type with three elements: number, string, and boolean
let article: readonly [number, string, boolean] = [11, "Title One", true];

// Assigning a new tuple value to the `article` variable
article = [12, "Title Two", false]; // Valid assignment because `article` is mutable

console.log(article);

// Destructuring the tuple into individual variables
const [id, title, published] = article; // Destructuring the `article` tuple
console.log(id); // Output: 12 (value of the first element)
console.log(title); // Output: "Title Two" (value of the second element)
console.log(published); // Output: false (value of the third element)
