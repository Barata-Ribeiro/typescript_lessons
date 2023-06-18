type PersonType = {
    name: string;
    surname: string;
    fullName(): string;
};

// It can implement several types, but the way above works better
// for the present case.

export class Person implements PersonType {
    constructor(public name: string, public surname: string) {}

    fullName(): string {
        return `${this.name} ${this.surname}`;
    }
}

const first_person = new Person('Jason', 'Bourne');
console.log(first_person.fullName());
