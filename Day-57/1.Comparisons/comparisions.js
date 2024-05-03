let A = 5 > 4, // true 
    B = "apple" > "pineapple", // false 
    C = "2" > "12", // true 
    D = undefined == null, // true
    E = undefined === null, // false
    F = null == "\n0\n", // false
    G = null === +"\n0\n"; // false

console.log(A, B, C, D, E, F, G);
