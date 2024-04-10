// This for loop counts from 1 to 10 but skips 5
for (let i = 1; i <= 10; i++) {
    // Check if the current number is 5
    if (i === 5) {
      // If it is, skip the rest of the loop and move on to the next iteration
      continue;
    }
    // Otherwise, log the current number
    console.log(i); // Logs numbers 1-4 and 6-10
  }
  // This demonstrates how to use 'continue' to skip a specific iteration
  // and continue with the next one.