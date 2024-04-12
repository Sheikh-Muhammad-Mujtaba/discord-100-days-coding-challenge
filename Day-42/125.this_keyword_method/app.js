// An object with multiple properties and a method that interacts with them using 'this'
var rectangle = {
    length: 4, // Assigns the value 4 to the 'length' property of the 'rectangle' object
    width: 5, // Assigns the value 5 to the 'width' property of the 'rectangle' object
    calculateArea: function () {
        return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },
};
console.log(rectangle.calculateArea()); // Outputs: 20
// This line logs the result of calling the 'calculateArea' method of the 'rectangle' object, which correctly computes the area using 'this'.
