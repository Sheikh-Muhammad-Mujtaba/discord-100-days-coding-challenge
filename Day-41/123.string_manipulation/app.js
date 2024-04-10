// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str) {
    // Define a string containing all the vowels
    var vowels = "aeiouAEIOU";
    // Iterate through each character in the input string
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        // Check if the current character is a vowel
        if (vowels.includes(char)) {
            // If it is, log the first vowel found and exit the loop
            console.log("First vowel found: ".concat(char));
            break;
        }
        // Otherwise, log the current character
        console.log(char);
    }
}
// Example usage:
logUntilVowel("syzygu"); // Logs 's', 'y', 'z', 'y', 'g' and then 'First vowel found: u'
// Demonstrates iterating through a string and stopping at the first vowel.
