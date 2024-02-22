function decorator(classPrototype: any, nameMethod: string | symbol, index: number) {
    console.log(classPrototype);
    console.log(nameMethod);
    console.log(index);
}

export class Person {
    name: string;
    lastname: string;
    age: number;

    constructor(name: string, lastname: string, age: number) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

    method(@decorator msg: string): string {
        return `${this.name} ${this.lastname}: ${msg}`;
    }

    get fullName(): string {
        return this.name + ' ' + this.lastname;
    }

    set fullName(@decorator valor: string) {
        const words = valor.split(/\s+/g);
        const firstName = words.shift();
        if (!firstName) return;
        this.name = firstName;
        this.lastname = words.join(' ');
    }
}

const jason = new Person('Jason', 'Bourne', 30);
const method = jason.method('Hello, world!');
console.log(method);
