// Define a function called "city_country" that takes two parameters:
// - "city": A string representing the name of the city.
// - "country": A string representing the name of the country.
// The function returns a string in the format "city, country".
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the "city_country" function with specific city-country pairs and log the results.
console.log(city_country("Lahore", "Pakistan")); // Output: "Lahore, Pakistan"
console.log(city_country("Tokyo", "Japan")); // Output: "Tokyo, Japan"
console.log(city_country("Paris", "France")); // Output: "Paris, France"
