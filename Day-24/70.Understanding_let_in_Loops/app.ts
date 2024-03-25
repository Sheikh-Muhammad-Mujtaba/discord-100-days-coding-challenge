// This function prints numbers from 1 to 5 using a loop
function printNumbersWithLet(): void {
    // Declare the variable `i` with `let` and initialize it to 1
    for (let i: number = 1; i <= 5; i++) {
      // Use `console.log` to print the current value of `i`
      console.log(i); // Logs numbers 1 through 5
    }
    // Since `i` is defined with `let`, it is not accessible here, outside the loop
  }
  
  printNumbersWithLet();
  // This shows that `let` limits `i` to the loop, preventing errors from using `i` where it's not intended.