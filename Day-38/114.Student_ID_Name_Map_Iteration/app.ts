// Creates a Map to store student IDs (keys) and names (values)
const students = new Map<number, string>();
students.set(1, "Alice"); // Adds student with ID 1 and name "Alice"
students.set(2, "Bob"); // Adds student with ID 2 and name "Bob"
students.set(3, "Charlie"); // Adds student with ID 3 and name "Charlie"

// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`); // Logs each student's ID and name
});
