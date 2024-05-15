let data: any = 1000; // Initialize a variable 'data' with the value 1000. Since it's of type 'any', it can hold any type of value.

// Type assertion to treat "data" as a string
console.log((data as string).repeat(3)); // Use type assertion to treat 'data' as a string and repeat it three times. Then, log the result to the console.
