// Function to categorize a person's age group
function categorizeAge(age: number): string {
    // Check age against different age group thresholds
    if (age < 13) {
      return "child"; // Return 'child' if age is less than 13
    } else if (age <= 19) {
      return "teenager"; // Return 'teenager' if age is between 13 and 19 (inclusive)
    } else {
      return "adult"; // Return 'adult' if age is 20 or above
    }
  }
  
  // Test the function with different ages
  console.log(categorizeAge(12)); // Outputs: child
  console.log(categorizeAge(18)); // Outputs: teenager
  console.log(categorizeAge(25)); // Outputs: adult
  