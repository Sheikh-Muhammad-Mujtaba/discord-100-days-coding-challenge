// Create a new HTMLImageElement using document.createElement() method
const imgElement: HTMLImageElement = document.createElement("img");

// Set the src attribute of the image element to the image file path
imgElement.src = "image.jpg";

// Set the alt attribute of the image element to provide alternative text for accessibility
imgElement.alt = "My Image";

// Check if the image has already been loaded (complete property)
if (imgElement.complete) {
    // If the image is already loaded, log its dimensions immediately
    console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
} else {
    // If the image is not yet loaded, add an event listener for the "load" event
    imgElement.addEventListener("load", () => {
        // Once the image is loaded, log its dimensions
        console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    });
}
