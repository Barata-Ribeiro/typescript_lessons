type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key];

const animal = {
    breed: 'Husky',
    color: 'gray',
    vaccines: ['vaccine 1', 'vaccine 2'],
};

const vaccines = getKey(animal, 'vaccines');
const color = getKey(animal, 'color');

console.log(vaccines);
console.log(color);
