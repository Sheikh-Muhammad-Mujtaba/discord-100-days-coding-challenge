## Type Annotations With Arrays

Type annotations with arrays in TypeScript allow you to specify the expected data types of the array elements, ensuring type safety and providing clarity in your code. In the provided example, an array of strings (`fruits`) is annotated using the syntax `let fruits: string[]`, indicating that it should only contain string values. This helps catch type errors at compile time and provides better IDE support for code completion and type checking.

The example demonstrates iterating over the array using a `for` loop to process each element, showcasing how type annotations enable type-specific operations like converting strings to uppercase (`fruits[i].toUpperCase()`).

## Type Annotations With Multidimensional Arrays

Type annotations with multidimensional arrays extend the concept of type safety to arrays containing elements of different types or arrays of arrays. In the provided code snippet, three arrays (`arrayOne`, `arrayTwo`, and `arrayThree`) are annotated with their respective element types: `number[]`, `string[]`, and `(string | number)[]`.

- `arrayOne` is annotated as an array of numbers, ensuring that only numeric values are allowed in the array.
- `arrayTwo` is annotated as an array of strings, restricting its elements to string values only.
- `arrayThree` is annotated as an array that can hold elements of either string or number types, allowing for a mixture of numeric and string values within the same array.

These type annotations provide clear documentation of the expected data types and help prevent type-related errors during development. They enhance code readability and maintainability by making the codebase more self-explanatory and less prone to type-related bugs.
