// Define a function called noReturn that takes a variable number of string arguments
// and logs them to the console separated by spaces
function noReturn(...args: string[]): void {
    console.log(args.join(' '));
}

// Define an object called person with name and surname properties and a method called showName
const person = {
    name: 'John',
    surname: 'Doe',

    // Define a method called showName that logs a greeting message to the console
    showName(): void {
        console.log(`Hello, ${this.name} ${this.surname}`);
    },
};

// Call the noReturn function with the arguments 'foo', 'bar', and 'baz'
noReturn('foo', 'bar', 'baz');

// Call the showName method on the person object, which logs a greeting message to the console
person.showName();

// Export the person object so it can be used in other modules
export { person };

// Type void doesn't return anything
