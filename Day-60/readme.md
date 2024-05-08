## *Function expressions*


- Functions are values. They can be assigned, copied or declared in any place of the code.

- If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.

- If the function is created as a part of an expression, it’s called a “Function Expression”.

- Function Declarations are processed before the code block is executed. They are visible everywhere in the block.

- Function Expressions are created when the execution flow reaches them.

- In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself.

- That gives us more flexibility in code organization, and is usually more readable.
 
---

### Is  else is required?

---

### Code with `else`

```javascript
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
}
```

In this version, if the `age` is greater than 18, the function returns `true`. Otherwise, it executes the `else` block, which includes a confirmation prompt asking if the parents allowed the action.

---
### Code without `else`
```javascript
function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
}
```
In this version, if the `age` is greater than 18, the function returns `true`. Otherwise, it directly executes the subsequent code, which includes the same confirmation prompt.

Both versions of the code achieve the same functionality. If the `age` is greater than 18, the function returns `true`. If not, it prompts the user to confirm if the parents allowed the action.
---

### Rewritw following function without if.

---

## function with if 

```javascript
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
  ```

## function without if

```javascript
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
  ```
  ---

  ## using `?` operator

---

### Solution using `if`

```javascript
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
```
In this solution, an `if`statement checks if `a` is less than `b`. If true, it returns `a`, otherwise it returns `b`.
---

### Solution using `?` operator

```javascript
function min(a, b) {
  return a < b ? a : b;
}
```
In this solution, the ternary operator `?` is used. It checks if `a` is less than `b`. If true, it returns `a`, otherwise it returns `b`.

Both solutions accomplish the same task: finding the minimum of two numbers. However, the second solution using the question mark operator (`?`) is more concise and often preferred for its brevity.

---

## Power Function

The provided code defines a `pow` function that calculates the power of a number `x` raised to the exponent `n`.

```javascript
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
```

markdown
Copy code
## Power Function

The provided code defines a `pow` function that calculates the power of a number `x` raised to the exponent `n`.

```javascript
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
```
*In this function:*

- The variable `result` is initialized with the value of `x`.
- 
- A `for` loop iterates from `1` to `n - 1`, multiplying `result` by `x` each time to calculate the power.
- 
- The calculated `result` is returned.

After defining the `pow` function, the code prompts the user for input values `x` and `n`.

```javascript
let x = prompt("x?", "");
let n = prompt("n?", "");
```
It then checks if the exponent `n` is less than `1`. If n is less than `1`, it alerts the user that negative powers are not supported and requests the use of a positive integer. Otherwise, it calls the `pow` function to calculate the power of `x` raised to the exponent `n` and displays the result using `alert`.


```javascript
if (n < 1) {
  alert(`Power ${n} is not supported. Please use a positive integer.`);
} else {
  alert(pow(x, n));
}
```

This code provides a simple interface for calculating the power of a number and handles cases where negative powers are entered by the user.

