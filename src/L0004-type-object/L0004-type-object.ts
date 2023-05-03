// Everything is an object in JavaScript...

// Define an object called objectA that has a keyA property of type string, a keyB property of type string,
// an optional keyC property of type string, and any other properties with keys of type string and values of type unknown
const objectA: {
    keyA: string;
    // If readonly, can't change the value of keyA
    // readonly keyA: string;
    keyB: string;
    keyC?: string; // Optional
    [key: string]: unknown;
} = {
    // Set the values of the keyA and keyB properties
    keyA: 'valueA',
    keyB: 'valueB',
};

// Change the values of the keyA and keyB properties
objectA.keyA = 'New value for keyA';
objectA.keyB = 'New value for keyB';

// Add a new keyC property with the value 'New key, C', which is optional in the object type definition
objectA.keyC = 'New key, C';

// Add a new keyD property with the value '123456', which is not defined in the object type definition
objectA.keyD = 123456;

console.log(objectA);
