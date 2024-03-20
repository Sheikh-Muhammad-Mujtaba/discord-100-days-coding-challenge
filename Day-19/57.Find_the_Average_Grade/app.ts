// Define an array of grades
let grades = [88, 94, 72, 99, 53, 77];

// Use the `reduce` function to calculate the average grade
let averageGrade = grades.reduce((total, grade) => {
  // For each grade in the array, add it to the running total
  return total + grade;
}, 0) / grades.length;

// Show the average grade
console.log(averageGrade);

// This code calculates the average grade of the array of grades.
// The `reduce` function is used to add up all the grades in the array.
// The `reduce` function takes two arguments: a callback function and an initial value.
// The callback function takes two arguments: an accumulator (in this case, `total`) and the current item (in this case, `grade`).
// The callback function returns a new value for the accumulator, which is then passed to the next iteration of the loop.
// In this case, the callback function simply adds the current grade to the running total.
// The initial value of the accumulator is 0.
// After all the grades have been added up, the final value of the accumulator is divided by the length of the array to get the average grade.
// The average grade is then logged to the console.