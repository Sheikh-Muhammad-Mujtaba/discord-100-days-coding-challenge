alert( null || 2 && 3 || 4 );


// The 2 && 3 expression is evaluated first. Both 2 and 3 are truthy values, so the result of this expression is the last truthy value encountered, which is 3.
// Next, the null || 3 expression is evaluated. Since null is falsy, the result is the value of the second operand, which is 3.
// Finally, the 3 || 4 expression is evaluated. The first operand (3) is truthy, so the evaluation stops and 3 is returned.