alert( alert(1) && alert(2) );


// The inner alert(1) statement is executed first, displaying 1 in an alert dialog. This statement returns undefined.
// Since the result of the inner alert(1) is undefined, the next operand (alert(2)) is not evaluated.
// Because one of the operands (alert(1)) is falsy (undefined), the evaluation stops and undefined is returned.