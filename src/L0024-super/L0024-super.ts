// Father class (superclass)
export class Person {
    constructor(
        public name: string,
        public surname: string,
        private age: number,
        protected cpf: string,
    ) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.cpf = cpf;
    }

    getAge(): number {
        return this.age;
    }

    getCPF(): string {
        return this.cpf;
    }

    getFullName(): string {
        return `${this.name} ${this.surname}`;
    }
}

// Child class of father class (subclass of Person)
export class Student extends Person {
    constructor(
        name: string,
        surname: string,
        age: number,
        cpf: string,
        public studentClass: string,
    ) {
        super(name, surname, age, cpf);
    }
    getFullName(): string {
        // return `This is from the student... Name: ${this.name} ${this.surname}`;
        console.log('DOING SOMETHING FIRST...');
        const result = super.getFullName();
        return `The result is: ${result}`;
    }
}

// Child class of father class (subclass of Person)
export class Client extends Person {
    getFullName(): string {
        return `The client names is: ${this.name} ${this.surname}`;
    }
}

const person = new Person('Maria', 'Vasconselos', 26, '965.601.450-26');
const student = new Student('Hector', 'Martins', 45, '353.729.600-27', '0001');
const client = new Client('Jason', 'Bourne', 30, '440.639.840-60');

// console.log(person);
// console.log(student);
// console.log(client);

console.log(person.getFullName());
console.log(student.getFullName());
console.log(client.getFullName());

console.log(student);
