// Arrow function that calculates the product of all its parameters
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters(2, 3, 4)); // Outputs: 24
// This function uses the rest parameter syntax (...) to take any number of arguments and store them in an array named 'numbers'.
// The reduce method is then used to multiply all the numbers in the 'numbers' array together, starting from an initial value of 1.
