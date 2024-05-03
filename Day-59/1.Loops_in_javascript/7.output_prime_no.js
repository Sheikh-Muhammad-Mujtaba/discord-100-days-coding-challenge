let n = 10; // Define the upper limit for finding prime numbers

primeno: for (let i = 2; i <= n; i++) { // Iterate through numbers from 2 to n
  for (let j = 2; j < i; j++) { // Inner loop to check divisibility of i by numbers from 2 to i - 1
    if (i % j == 0) continue primeno; // If i is divisible by j, skip to the next iteration of the outer loop

    alert(i); // If i is not divisible by any j, it's prime, so alert it
  }
}
