// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str: string): void {
    // Define a string containing all the vowels
    const vowels = "aeiouAEIOU";
    // Iterate through each character in the input string
    for (const char of str) {
      // Check if the current character is a vowel
      if (vowels.includes(char)) {
        // If it is, log the first vowel found and exit the loop
        console.log(`First vowel found: ${char}`);
        break;
      }
      // Otherwise, log the current character
      console.log(char);
    }
  }
  
  // Example usage:
  logUntilVowel("syzygu"); // Logs 's', 'y', 'z', 'y', 'g' and then 'First vowel found: u'
  // Demonstrates iterating through a string and stopping at the first vowel.