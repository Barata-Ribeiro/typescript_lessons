// Array<type> -(or) type[]

// Define a function called multiplyArgs that takes a variable number of arguments of type number as an array
// and returns the product of all the numbers
export function multiplyArgs(...args: Array<number>): number {
    return args.reduce((ac, value) => ac * value, 1);
}

// Define a function called stringConcat that takes a variable number of arguments of type string as an array
// and returns the concatenation of all the strings
export function stringConcat(...args: string[]): string {
    return args.reduce((ac, value) => ac + value);
}

// Define a function called toUpperCase that takes a variable number of arguments of type string as an array
// and returns an array of all the strings converted to uppercase
export function toUpperCase(...args: string[]): string[] {
    return args.map((value) => value.toUpperCase());
}

// Call the multiplyArgs function with the arguments 1, 2, 3, 4, 5, and 6, and store the result in a variable called result
const result = multiplyArgs(1, 2, 3, 4, 5, 6);

// Call the stringConcat function with the arguments 'John', 'Doe', 'Jane', and 'Doe', and store the result in a variable called concat
const concat = stringConcat('John', 'Doe', 'Jane', 'Doe');

// Call the toUpperCase function with the arguments 'a', 'b', 'c', and 'd', and store the result in a variable called upperCase
const upperCase = toUpperCase('a', 'b', 'c', 'd');

// Log the result, concat, and upperCase variables to the console
console.log(result);
console.log(concat);
console.log(upperCase);
