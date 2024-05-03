alert( null || 2 || undefined );


// null is falsy, so the next operand (2) is evaluated.
// 2 is truthy, so the evaluation stops and 2 is returned.
// undefined is not evaluated because the evaluation already stopped at the previous truthy operand (2).