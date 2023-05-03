// Type tuple

// Define four tuples with pre-defined types and values
// clientData1 has two elements, with the first element being a number and the second element being a string, and is read-only
const clientData1: readonly [number, string] = [1, 'Jason'];

// clientData2 has three elements, with the first element being a number and the second and third elements being strings
const clientData2: [number, string, string] = [2, 'Jason', 'McDonald'];

// clientData3 has three elements, with the first element being a number and the second and third elements being strings,
// with the third element being optional
const clientData3: [number, string, string?] = [3, 'Hebe', 'Camargo'];

// clientData4 has three or more elements, with the first element being a number and the rest being strings
const clientData4: [number, string, ...string[]] = [4, 'Maximus', 'Decimus', 'Meridius'];

// The following code won't work because clientData1 is read-only
// clientData1[0] = 100;
// clientData1[1] = 'James';
// clientData1.pop();

// Log the clientData1, clientData2, clientData3, and clientData4 tuples to the console
console.log(clientData1); // Default [1, 'Jason']
console.log(clientData2); // Default [2, 'Jason', 'McDonald']
console.log(clientData3); // Default [3, 'Hebe', 'Camargo']
console.log(clientData4); // Default [4, 'Maximus', 'Decimus', 'Meridius']

// Define two read-only arrays with pre-defined values
// array1 and array2 are an array of strings and read-only
const array1: readonly string[] = ['House', 'Kitchen'];
const array2: ReadonlyArray<string> = ['House', 'Kitchen'];

// Log the array1 and array2 read-only arrays to the console
console.log(array1, array2); // Default ['House', 'Kitchen']
