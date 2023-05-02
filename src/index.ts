// src/index.ts
const favoriteFruits: string[] = ['apple', 'strawberry', 'orange'];

function addFruit(fruit: string) {
    favoriteFruits.push(fruit);
}

function removeFruit(fruit: string) {
    favoriteFruits.splice(favoriteFruits.indexOf(fruit), 1);
}

console.log(favoriteFruits);
addFruit('banana');
console.log(favoriteFruits);
removeFruit('apple');
console.log(favoriteFruits);

const nome = 'World';

console.log(`Hello, ${nome}!`);
