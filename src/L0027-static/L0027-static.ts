export class Person {
    static defaultAge = 0;
    static defaultCpf = '000.000.000-00';

    constructor(
        public name: string,
        public surname: string,
        public age: number,
        public cpf: string,
    ) {}

    // static sayHi(): void {
    //     console.log('Hi!');
    // }

    normalMethod(): void {
        console.log(Person.defaultAge, Person.defaultCpf);
    }

    static createPerson(name: string, surname: string): Person {
        return new Person(name, surname, Person.defaultAge, Person.defaultCpf);
    }
}

const person1 = new Person('Jason', 'Bourne', 30, '440.639.840-60');
const person2 = Person.createPerson('John', 'Doe');

console.log(person1);
console.log(person2);

person1.normalMethod();
// or
console.log(Person.defaultAge, Person.defaultCpf);

// Person.sayHi();
