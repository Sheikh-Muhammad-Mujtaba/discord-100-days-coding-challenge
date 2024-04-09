// This function logs the season based on the month
function logSeason(month) {
    // Switch statement to determine the season based on the provided month
    switch (month) {
        // Cases for winter months: December, January, February
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        // Cases for spring months: March, April, May
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        // Cases for summer months: June, July, August
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        // Cases for fall months: September, October, November
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
        // Default case triggered if the provided month does not match any of the defined cases
        default:
            console.log("Invalid month");
            break;
    }
}
// Call the function with a month number (in this case, 4 for April)
logSeason(4); // Outputs: Spring
