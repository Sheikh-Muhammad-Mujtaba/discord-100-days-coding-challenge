// Define an object called 'laptop' with the following properties:
// - make: string, value is 'Dell'
// - model: string, value is 'XPS 15'
// - year: number, value is 2021
// - describe: function, logs a description of the laptop to the console
var laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
// Call the 'describe' function on the 'laptop' object
laptop.describe();
