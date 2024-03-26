// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    // Initializes x with a value of 4
    let x = 4;
    console.log("Initial x:", x);

    // Adds 2 to x using the compound assignment operator +=
    x += 2;
    console.log("After addition:", x); // Displays x after the addition operation

    // Subtracts 1 from x using the compound assignment operator -=
    x -= 1;
    console.log("After subtraction:", x); // Displays x after the subtraction operation

    // Multiplies x by 3 using the compound assignment operator *=
    x *= 3;
    console.log("After multiplication:", x); // Displays x after the multiplication operation

    // Divides x by 2 using the compound assignment operator /=
    x /= 2;
    console.log("After division:", x); // Displays x after the division operation
}

// Calls the useCompoundOperators function to run the code
useCompoundOperators();
