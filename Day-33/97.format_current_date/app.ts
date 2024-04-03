// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted(): string {
    // The Date() constructor is used to create a new date object with the current date and time
    const now = new Date();

    // The getDate() method is used to retrieve the day of the month (1-31) from the current date object
    // The String() method is used to convert the day value to a string
    // The padStart() method is used to ensure the day is two digits
    // The first argument is the target length of the resulting string
    // The second argument is the string used to pad the beginning of the string
    const day = String(now.getDate()).padStart(2, '0');

    // The getMonth() method is used to retrieve the month (0-11) from the current date object
    // The String() method is used to convert the month value to a string
    // The padStart() method is used to add 1 to the month value because months are 0-indexed
    // The resulting string is then padded with 0 to ensure the month is two digits
    const month = String(now.getMonth() + 1).padStart(2, '0');

    // The getFullYear() method is used to retrieve the year from the current date object
    const year = now.getFullYear();

    // The resulting string is returned, with the format DD-MM-YYYY
    return `${day}-${month}-${year}`;
}

// The console.log() method is used to print the output
console.log(getCurrentDateFormatted()); // Outputs the current date in DD-MM-YYYY format

// The function getCurrentDateFormatted() returns the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.