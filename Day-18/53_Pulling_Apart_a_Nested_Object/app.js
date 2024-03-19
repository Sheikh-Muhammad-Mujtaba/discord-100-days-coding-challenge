// Define an object called 'developerSkills' with three properties:
// - languages: an array of strings representing programming languages
// - frameworks: an array of strings representing web development frameworks
// - tools: an array of strings representing tools used in web development
var developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
// Destructure the 'developerSkills' object into three separate variables:
// - languages: an array of strings representing programming languages
// - frameworks: an array of strings representing web development frameworks
// - tools: an array of strings representing tools used in web development
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
// Log the first skill from each category to the console
console.log("Language: ".concat(languages[0], ", Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[0]));
// // Log the second skill from each category to the console
// console.log(`Language: ${languages[1]}, Framework: ${frameworks[1]}, Tool: ${tools[1]}`);
// // Log the third skill from each category to the console
// console.log(`Language: ${languages[2]}, Framework: ${frameworks[2]}, Tool: ${tools[2]}`);
