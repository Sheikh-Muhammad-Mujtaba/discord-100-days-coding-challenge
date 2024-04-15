"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.result = 0;
    }
    Calculator.prototype.add = function (a, b) {
        this.result = a + b;
        return this.result;
    };
    Calculator.prototype.subtract = function (a, b) {
        this.result = a - b;
        return this.result;
    };
    Calculator.prototype.multiply = function (a, b) {
        this.result = a * b;
        return this.result;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        this.result = a / b;
        return this.result;
    };
    Calculator.prototype.getResult = function () {
        return this.result;
    };
    Calculator.prototype.clear = function () {
        this.result = 0;
    };
    return Calculator;
}());
exports.default = Calculator;
