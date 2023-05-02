/* eslint-disable */

// Basic types
let newName: string = "Jason"; // Any type of string: '' "" ``
let age: number = 18; // Any type of number: 10, 2.45, -43.45, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; // Any type of boolean: true or false
let newSymbol: Symbol = Symbol('Any-symbol'); // Symbol
// let big: bigint = 10n; // bigint

// Arrays
let numberArray: Array<number> = [10, 43, 21];
let numberArray2: number[] = [45, 65, 77];
let stringArray: Array<string> = ['Jason', 'John', 'Helen'];
let stringArray2: string[] = ['Gabriel', 'James', 'Rick'];

// Objects
let person: {name: string, age: number, adult?: boolean} = {
    name: "Mark",
    age: 18,
    adult: true
}

console.log(`Name: ${person.name}, Age: ${person.age}, Adult: ${person.adult}`); // "Mark", 18, true

// Functions
function sum(x: number, y: number): number {
    return x + y;
}
const result = sum(1, 2);

console.log(`Sum: ${result}`); // 3

const sum2: (x: number, y: number) => number = (x, y) => x + y;
