interface PersonProtocol<T = string, U = number> {
    name: T;
    surname: T;
    age: U;
}

type PersonProtocol2<T = string, U = number> = {
    name: T;
    surname: T;
    age: U;
};

const student1: PersonProtocol<string, number> = {
    name: 'Jason',
    surname: 'Bourne',
    age: 35,
};

const student2: PersonProtocol<number, string> = {
    name: 123,
    surname: 456,
    age: '30',
};

const student3: PersonProtocol2 = {
    name: 'John',
    surname: 'Smith',
    age: 27,
};

console.log(student1);
console.log(student2);
console.log(student3);
