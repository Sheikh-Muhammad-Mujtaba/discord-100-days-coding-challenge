// Creating a blueprint (interface) for student information
interface Student {
    // The student must have a name, which is a string
    name: string;
    // The student must have an age, which is a number
    age: number;
    // The student must have a list of courses they are taking, which is an array of strings
    courses: string[];
  }
  
  // Filling in the blueprint with an example student
  let student: Student = {
    // The student's name is "Alice", which is a string
    name: "Alice",
    // The student's age is 22, which is a number
    age: 22,
    // The student is taking three courses: "Math", "Science", and "History", which are all strings
    courses: ["Math", "Science", "History"]
  };
  
  // Showing the student's information
  console.log(student);
  // We're using the blueprint to make sure our student has a name, age, and list of courses.