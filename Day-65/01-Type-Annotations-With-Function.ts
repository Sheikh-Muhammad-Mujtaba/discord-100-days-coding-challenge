
// Function to calculate the area of a rectangle
function calculateRectangleArea(lengthRectAngle: number, widthOfRectAngle: number): number {
    return lengthRectAngle * widthOfRectAngle; // Multiply length by width to get the area
  }
  
  // Calling the function with valid arguments
  const lengthRectAngle = 5; // Length of the rectangle
  const widthOfRectAngle = 3; // Width of the rectangle
  const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle); // Call function to calculate area
  console.log(`The area of the rectangle is: ${area}`); // Print the calculated area