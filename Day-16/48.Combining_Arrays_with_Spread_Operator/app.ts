// Define two arrays of prices, 'pricesSet1' and 'pricesSet2'
let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];

// Use the spread operator (...) to combine the two arrays into a single array called 'combinedPrices'
let combinedPrices = [...pricesSet1, ...pricesSet2];

// Sort the 'combinedPrices' array in ascending order using the 'sort' method and a custom compare function
combinedPrices.sort((a, b) => a - b);

// Log the sorted 'combinedPrices' array to the console
console.log(combinedPrices);