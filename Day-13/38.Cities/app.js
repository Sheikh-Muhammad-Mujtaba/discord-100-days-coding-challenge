// Define a function called "describe_city" that takes two parameters:
// - "city": A string representing the name of the city.
// - "country": A string representing the country where the city is located (default value is "Pakistan").
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    // Log a message to the console, indicating the city and its associated country.
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the "describe_city" function with the following arguments:
// 1. "Karachi" (city name) - Default country ("Pakistan") will be used.
// Output: "Karachi is in Pakistan."
describe_city("Karachi");
// Call the "describe_city" function with the following arguments:
// 2. "Lahore" (city name) - Default country ("Pakistan") will be used.
// Output: "Lahore is in Pakistan."
describe_city("Lahore");
// Call the "describe_city" function with the following arguments:
// 3. "Tokyo" (city name) and "Japan" (explicitly provided country).
// Output: "Tokyo is in Japan."
describe_city("Tokyo", "Japan");
