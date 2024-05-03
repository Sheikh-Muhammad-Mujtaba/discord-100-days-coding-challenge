let number;

do {
  number = prompt("Please enter a number greater than 100:", '');
} while (number !== null && (isNaN(Number(number)) || Number(number) <= 100));

if (number !== null && number !== '') {
  alert("Thank you! You entered a number greater than 100.");
} else {
  alert("Input cancelled or empty line entered.");
}