// This function evaluates a grade and logs the corresponding remark
function evaluateGrade(grade) {
    // Switch statement to determine the remark based on the provided grade
    switch (grade) {
        // Cases for different grades and their corresponding remarks
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Poor");
            break;
        case "F":
            console.log("Fail");
            break;
        // Default case triggered if the provided grade does not match any of the defined cases
        default:
            console.log("Invalid grade");
            break;
    }
}
// Call the function with a grade letter (in this case, "B")
evaluateGrade("B"); // Outputs: Good
