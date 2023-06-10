export class Person {
    constructor(
        private name: string,
        private surname: string,
        private age: number,
        private _cpf: string,
    ) {
        this.cpf = _cpf;
    }

    // Getter, a public method that access a private property
    getName(): string {
        return this.name;
    }

    // setCPF(value: string): void {
    //     this.cpf = value;
    // }

    // getCPF(): string {
    //     // I can process a private property through a public method
    //     return this.cpf.replace(/\D/g, '');
    // }

    set cpf(cpf: string) {
        console.log('SETTER CALLED');
        this._cpf = cpf;
    }

    get cpf(): string {
        console.log('GETTER CALLED');
        return this._cpf.replace(/\D/g, '');
    }
}

const person = new Person('Jason', 'Bourne', 30, '440.639.840-60');
// person.setCPF('983.510.990-74');
person.cpf = '983.510.990-74';

// console.log(person.getName());
console.log(person.cpf);
// console.log(person.getCPF());
