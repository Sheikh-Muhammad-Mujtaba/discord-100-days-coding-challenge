// This function creates another function that adds a specific number to its input.
// It takes a single argument, 'valueToAdd', which is the number that will be added to the input.
function makeAdder(valueToAdd) {
    // This is the magic box (function) that adds 'valueToAdd' to any number.
    // It takes a single argument, 'number', which is the number that the magic box will add 'valueToAdd' to.
    return function (number) {
        // This is the magic inside the magic box. It adds 'valueToAdd' to 'number'.
        return number + valueToAdd;
    };
}
// Making a magic box that adds 10
var addTen = makeAdder(10);
// Using the magic box to add 10 to 20
console.log(addTen(20)); // If we put 20 in the box, it gives us 30
// We made a function (magic box) that adds 10 to any number.
