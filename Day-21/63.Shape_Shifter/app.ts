// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    // The shape must have a "kind" property, which can be either "circle" or "rectangle"
    kind: "circle" | "rectangle";
    // Circles have a "radius" property, which is a number
    radius?: number;
    // Rectangles have a "width" property, which is a number
    width?: number;
    // Rectangles have a "height" property, which is a number
    height?: number;
  };
  
  // Describing a circle using our Shape type
  let circle: Shape = {
    // The shape is a circle
    kind: "circle",
    // The circle has a radius
    radius: 5
  };
  
  // Describing a rectangle using our Shape type
  let rectangle: Shape = {
    // The shape is a rectangle
    kind: "rectangle",
    // The rectangle has a width and a height
    width: 10,
    height: 20
  };
  
  // Showing what we described
  console.log(circle); // Here's the circle
  console.log(rectangle); // And here's the rectangle
  // We made a flexible program that can describe different shapes in detail.