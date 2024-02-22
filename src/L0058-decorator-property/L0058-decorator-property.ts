function decorator(classProtype: any, nameProperty: string | symbol): any {
    let _val: any;
    return {
        get: () => _val,
        set: (value: any) => {
            if (typeof value === 'string') {
                _val = value.split('').reverse().join('');
                return;
            } else _val = value;
        },
    };
}

export class Person {
    @decorator
    name: string;

    @decorator
    lastname: string;

    age: number;

    constructor(name: string, lastname: string, age: number) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

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
const method = jason.method('Hello, world!');
console.log(method);
