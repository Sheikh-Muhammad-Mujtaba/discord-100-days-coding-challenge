// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month: number, day: number): Date {
    // The Date() constructor is used to create a new date object with the current date and time
    const today = new Date();

    // The year is set to the current year
    let year = today.getFullYear();

    // The Date() constructor is used again to create a new date object for the specified month and day
    // The month is 0-indexed, so 1 is subtracted from the input value
    const birthday = new Date(year, month - 1, day);

    // If the birthday this year has already passed, the year is set to the next year
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }

    // The resulting date object for the next birthday is returned
    return birthday;
}

// The following lines are used for testing the function
// Replace the values for the month and day with the user's birth month and day
const nextBirthday = getNextBirthday(12, 25); // Example: December 25th

// The console.log() method is used to print the output
// The toLocaleDateString() method is used to format the date as a string
console.log("Next birthday on:", nextBirthday.toLocaleDateString());

// The function getNextBirthday() returns a date object for the next occurrence of a specific birthday
// The month and day are passed as arguments
// The resulting date object is stored in the 'nextBirthday' variable
// The console.log() method is used to print the output
// The toLocaleDateString() method is used to format the date as a string
// Shows the date of the next birthday.