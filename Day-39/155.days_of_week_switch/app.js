// This function logs the day of the week based on a number (1-7)
function logDayOfWeek(dayNumber) {
    // Switch statement to handle different cases for each day of the week
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        // Default case triggered if the provided number does not match any of the defined cases
        default:
            console.log("Invalid day number");
            break;
    }
}
// Call the function with a day number (in this case, 3 for Tuesday)
logDayOfWeek(3); // Outputs: Tuesday
