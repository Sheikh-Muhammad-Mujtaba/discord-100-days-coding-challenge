// Calculates how many days are left until New Year's Day
function daysUntilNewYear() {
    // The Date() constructor is used to create a new date object with the current date and time
    var today = new Date();
    // The Date() constructor is used again to create a new date object for January 1st of next year
    // The parameters are the year, month (0-11), and day (1-31)
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    // The getTime() method is used to retrieve the number of milliseconds since January 1, 1970, 00:00:00 UTC
    // The difference in milliseconds between the current date and New Year's Day is calculated
    var diff = newYear.getTime() - today.getTime();
    // The difference in milliseconds is converted to days
    // The Math.ceil() method is used to round up to the nearest integer
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    // The resulting number of days is returned
    return days;
}
// The console.log() method is used to print the output
console.log(daysUntilNewYear() + " days until New Year.");
// The function daysUntilNewYear() returns the number of days left until New Year's Day
// The console.log() method is used to print the output
// Shows the number of days until the next New Year's Day.
