// This function swaps the values of two variables
function swapValues() {
    // Initialize a and b with values 5 and 10 respectively
    let a = 5, b = 10; 

    // Log the initial values of a and b before swapping
    console.log("Before swap: a =", a, "b =", b);

    // Create a temporary variable 'temp' and assign the value of 'a' to it
    let temp = a;

    // Set the value of 'a' to 'b'
    a = b;

    // Set the value of 'b' to the original value of 'a' stored in 'temp'
    b = temp;

    // Log the swapped values of 'a' and 'b'
    console.log("After swap: a =", a, "b =", b);
}

// Call the function to swap the values of a and b
swapValues();

// We use a temporary variable to hold one value while we swap them, like a magic trick!
