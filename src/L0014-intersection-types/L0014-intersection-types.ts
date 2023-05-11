// Intersection types not used as much as union types
// '&' also read as AND

type HasName = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };
type Person = HasName & HasSurname & HasAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
// It's the intersection of AB & AC & AD = 'A'
type Intersection = AB & AC & AD;

const newPerson: Person = {
    name: 'John',
    surname: 'Doe',
    age: 30,
};

console.log(newPerson);
