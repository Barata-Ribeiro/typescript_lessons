// Can't use both type and interface...
// export type Person = {
//     name: string;
// };

// Declaration merging...
export interface Person {
    readonly name: string;
}

export interface Person {
    readonly surname: string;
}

export interface Person {
    fullName(): string;
}

export interface Person {
    // Doesn't need to exist, but if it does, it will be readonly
    readonly age?: number;
}

// The correct and fastest way to use the interface
export interface Person {
    readonly name: string;
    readonly surname: string;
    fullName(): string;
    readonly age?: number;
}

const person: Person = {
    name: 'Jason',
    surname: 'Bourne',
    fullName(): string {
        return `${this.name} ${this.surname}`;
    },
    age: 30,
};

console.log(person.fullName());
