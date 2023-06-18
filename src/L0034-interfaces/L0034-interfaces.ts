interface NameType {
    name: string;
}

interface SurnameType {
    surname: string;
}

interface FullNameType {
    fullName(): string;
}

// type NumberType = number | string;

// type PersonType = NameType & SurnameType & FullNameType;
interface PersonTypeTwo extends NameType, SurnameType, FullNameType {}

export class Person implements PersonTypeTwo {
    constructor(public name: string, public surname: string) {}

    fullName(): string {
        return `${this.name} ${this.surname}`;
    }
}

const objPerson: PersonTypeTwo = {
    name: 'John',
    surname: 'Smith',
    fullName() {
        return `${this.name} ${this.surname}`;
    },
};

const first_person = new Person('Jason', 'Bourne');
console.log(first_person.fullName());

console.log(objPerson.fullName());
