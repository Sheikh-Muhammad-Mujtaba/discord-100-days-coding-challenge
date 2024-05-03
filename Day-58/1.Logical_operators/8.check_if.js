// Evaluate the expression '-1 || 0'
if (-1 || 0) {
    // Since '-1' is a truthy value, the condition is true and 'first' is alerted
    alert('first');
  }
  
  // Evaluate the expression '-1 && 0'
  if (-1 && 0) {
    // Since '-1' is truthy but '0' is falsy, the condition is false and 'second' is not alerted
  }
  
  // Evaluate the expression 'null || -1 && 1'
  if (null || -1 && 1) {
    // The expression 'null || -1 && 1' is equivalent to 'null || ( -1 && 1 )'
    // The '&&' operator has higher precedence than '||', so '-1 && 1' is evaluated first
    // Since both '-1' and '1' are truthy, the result of '-1 && 1' is '1'
    // Therefore, the expression becomes 'null || 1'
    // Since '1' is truthy, the condition is true and 'third' is alerted
    alert('third');
  }
  