// Store a person's name, and include some whitespace characters at the beginning and end of the name
let person_name: string = "\t\n Ali \n\t";

// Print the name once, so the whitespace around the name is displayed
console.log(person_name); // "\t\n Ali \n\t"

// Print the name after striping the white spaces
console.log(person_name.trim()); // "Ali"
