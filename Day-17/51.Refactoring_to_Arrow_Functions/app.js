// Original function for calculating the area of a rectangle
function calculateArea(width, height) {
    // Returns the product of the width and height
    return width * height;
}
// Refactored into an arrow function
var calculateAreaArrow = function (width, height) {
    // Returns the product of the width and height
    return width * height;
};
// Example usage of the arrow function
console.log(calculateAreaArrow(5, 7)); // Logs the area of the rectangle
