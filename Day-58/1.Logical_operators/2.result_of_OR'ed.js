alert( alert(1) || 2 || alert(3) );


// The inner alert(1) statement is executed first, displaying 1 in an alert dialog. This statement returns undefined.
// Since the result of the inner alert(1) is undefined, the next operand (2) is evaluated.
// 2 is truthy, so the evaluation stops and 2 is returned.
// The outer alert() statement is then executed with the result 2, but it doesn't display anything because 2 is already a truthy value.