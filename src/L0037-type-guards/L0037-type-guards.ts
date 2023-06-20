export const add = (a: unknown, b: unknown): number | string => {
    // if (typeof a === 'number' && typeof b === 'number') return a + b;
    // return `${a} + ${b}`;

    return typeof a === 'string' && typeof b === 'string' ? a + b : `${a} + ${b}`;
};

console.log(add(1, 2));
console.log(add('1', '2'));

type Person = { objType: 'person'; name: string };
type Animal = { objType: 'animal'; color: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
    objType: 'person' = 'person';
    constructor(public name: string) {}
}

const showName = (obj: PersonOrAnimal): void => {
    // if ('name' in obj) console.log(obj.name);

    // if (obj instanceof Student) console.log(obj.name);

    switch (obj.objType) {
        case 'person':
            console.log(obj.name);
            break;
        case 'animal':
            console.log(obj.color);
            break;
        default:
            break;
    }
};

showName(new Student('John'));
showName({ objType: 'animal', color: 'Red' });
