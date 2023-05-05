let x;
if (typeof x === 'undefined') x = 50;
console.log(x * 2);

export function createPerson(
    // Parameters of type string
    firstName: string,
    lastName?: string,
): {
    // Type annotations:
    firstName: string;
    lastName?: string;
} {
    // The object which is returned
    return {
        firstName,
        lastName,
    };
}

const person = createPerson('John');
console.log(person);

export function squareOf(x: any) {
    // Check if 'x' is a number
    if (typeof x === 'number') return x * x;
    return null;
}

const squareOfNumber = squareOf(5); // 25
const squareOfString = squareOf('This is a string.'); // Null

if (squareOfNumber === null) console.log('Not a number.');
else console.log(squareOfNumber * squareOfNumber); // 625

if (squareOfString === null) console.log('Error: This is a string.');
else console.log(squareOfString * squareOfString);
