// Initializes the counter at 10
let counter: number = 10;

// This while loop counts down from 10 to 1 and stops at 5
while (counter > 0) {
  // Check if the counter has reached 5
  if (counter === 5) {
    // If it has, exit the loop
    break;
  }
  // Otherwise, log the current value of the counter
  console.log(counter);
  // Decrement the counter by 1
  counter--;
}

// Logs the countdown from 10 to 1, but stops abruptly when it hits 5.