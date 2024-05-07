# TypeScript Built-in Types and Type Annotations

The guide introduces TypeScript's built-in types and the concept of type annotations. TypeScript extends JavaScript's built-in types and introduces additional types like 'any,' 'unknown,' 'never,' 'enum,' and 'tuple' to enhance type safety and code clarity.

## Type Annotations

Type annotations allow developers to explicitly specify the type of variables, functions, or other entities in their code using a colon (:) followed by the desired type. This helps the TypeScript compiler understand and enforce the intended types, leading to more robust and maintainable code.

### Using Type Annotations with Variables

Type annotations with variables can be done by either declaring and initializing them with explicit types or by declaring first and then assigning values later. It's essential to use type annotations for improving code quality and preventing type-related errors.

```typescript
let myNumber: number = 42;
let myString: string;

myString = "Hello, TypeScript";

console.log("My Number Is:", myNumber);
console.log("My String Is:", myString);
```
---

## Dynamic Type Determination

TypeScript can dynamically determine types based on context when type annotations are omitted. While TypeScript can infer types dynamically, it's recommended to use explicit type annotations for better code clarity and reliability.

```typescript
// Dynamic Type Determination
// TypeScript can dynamically determine types based on context when type annotations are omitted. 
// While TypeScript can infer types dynamically, it's recommended to use explicit type annotations for better code clarity and reliability.

let greeting = "Hello, world!";
console.log(greeting); // TypeScript infers the type of 'greeting' as a string
```
---

## The 'any' Type

The 'any' type in TypeScript represents values of any type and disables type checking for variables assigned this type. While 'any' offers flexibility, it's discouraged due to potential loss of type safety, reduced code reliability, maintenance challenges, and interference with tooling.

```typescript
let myVariable: any = 42;
myVariable = "Hello, TypeScript";
console.log(myVariable); // Output: Hello, TypeScript
```

Overall, leveraging TypeScript's type system through type annotations enhances code robustness, maintainability, and error prevention.