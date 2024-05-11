// Define an enumeration called "Days" with the days of the week
enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

// Declare a variable "today" of type "Days" and assign it the value "Wednesday"
const today: Days = Days.Wednesday;

// Print a message to the console indicating today's day using the enumeration value
console.log(`Today is ${Days[today]}`);
