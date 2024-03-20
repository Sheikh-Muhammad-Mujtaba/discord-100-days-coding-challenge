// This function calculates the average of all scores given.
// It takes a variable number of arguments, which are numbers.
// The '...' before 'scores' is the spread operator, which allows the function to accept any number of arguments.
// The arguments are then stored in an array called 'scores'.
function averageScore(...scores: number[]): number {
    // The 'reduce' method is usxed on the 'scores' array.
    // It takes two arguments: a callback function and an initial value.
    // The callback function takes two parameters: 'sum' and 'score'.
    // 'sum' is the accumulated value, and 'score' is the current element in the array.
    // The callback function adds the current score to the accumulated sum.
    // The initial value is 0, so the sum starts from 0.
    let total = scores.reduce((sum, score) => sum + score, 0);

    // The average score is calculated by dividing the total score by the number of scores.
    // This is done using the '/' operator.
    return total / scores.length;
}

// Example usage: finding the average of four scores
console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.