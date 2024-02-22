function decorator(
    classPrototype: any,
    methodName: string,
    descriptor: PropertyDescriptor,
): any {
    console.log(classPrototype);
    console.log(methodName);
    console.log(descriptor);
    return {
        value: (...args: any[]) => args[0].toUpperCase(),
    };
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

    @decorator
    method(msg: string): string {
        return `${this.name} ${this.lastname}: ${msg}`;
    }

    get fullName(): string {
        return this.name + ' ' + this.lastname;
    }

    set fullName(valor: string) {
        const words = valor.split(/\s+/g);
        const firstName = words.shift();
        if (!firstName) return;
        this.name = firstName;
        this.lastname = words.join(' ');
    }
}

const jason = new Person('Jason', 'Bourne', 30);
// jason.method = () => 'Teste';
const method = jason.method('Hello, world!');
console.log(method);
