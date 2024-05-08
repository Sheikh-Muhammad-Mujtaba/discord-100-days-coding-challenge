// code with if
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

  //code without if
  function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
checkAge()
  