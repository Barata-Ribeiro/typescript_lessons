let x = 10; // eslint-disable-line no-unused-vars
x = 0b1010;
// x = 'Jason'; <-- THIS CANT BE DONE
const y = 10;
let a = 100 as const; // eslint-disable-line no-unused-vars

console.log(x, y, a);

// example
const person = {
    name: 'Jason' as const,
    surname: 'Smith',
};
// person.name = 'Henrique'; <-- Won't work because '.name' is const

export function chooseColor(color: 'red' | 'green' | 'blue') {
    return color;
}
console.log(chooseColor('red')); // 'red'

// Module mode...
export default 1;
