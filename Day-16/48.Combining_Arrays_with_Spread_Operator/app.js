var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define two arrays of prices, 'pricesSet1' and 'pricesSet2'
var pricesSet1 = [1200, 1500, 1100];
var pricesSet2 = [1000, 1300, 1600];
// Use the spread operator (...) to combine the two arrays into a single array called 'combinedPrices'
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true);
// Sort the 'combinedPrices' array in ascending order using the 'sort' method and a custom compare function
combinedPrices.sort(function (a, b) { return a - b; });
// Log the sorted 'combinedPrices' array to the console
console.log(combinedPrices);
