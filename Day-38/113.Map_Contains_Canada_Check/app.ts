// Creates a new Map to store countries and their capitals
const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map
countries.set("Canada", "Ottawa"); // Adds Canada to the Map

// Log the Map containing countries and their capitals
console.log(countries);

// This function checks if "Canada" exists in the Map and logs its capital if found
function logCapitalOfCanada(countries: Map<string, string>): void {
  if (countries.has("Canada")) { // Check if the Map has "Canada" as a key
    console.log(`The capital of Canada is ${countries.get("Canada")}`); // Log the capital of Canada
  } else {
    console.log("Canada is not in the Map."); // Log a message indicating Canada is not in the Map
  }
}

// Call the function to check if Canada is in the Map and log its capital if available
logCapitalOfCanada(countries);
