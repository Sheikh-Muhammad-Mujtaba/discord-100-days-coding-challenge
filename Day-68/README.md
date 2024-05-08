
## tuple in TypeScript:
A tuple in TypeScript is a data structure that allows you to store a fixed-size collection of elements of different types. It provides a way to specify the types and order of elements within a single data structure. Unlike arrays, which can contain elements of the same type, tuples allow you to define the types and positions of each element explicitly.

---

```typescript
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
```
# In this TypeScript code:

- A tuple type `article` is defined with three elements: a number, a string, and a boolean. It is annotated as `readonly` to make it immutable.

- The `article` tuple is then reassigned with a new tuple value `[12, "Title Two", false]`, demonstrating that tuple variables can be mutable even if they are originally defined as readonly.
  
- An attempt to push a new element into the tuple (using `article.push(100)`) is made, but it will result in a TypeScript error because tuples are immutable and cannot be modified after initialization.
  
- The tuple `article` is destructured into individual variables `id`, `title`, and `published`, allowing easy access to each element of the tuple.

- The values of the individual elements (`id`, `title`, and `published`) are then logged to the console for demonstration.