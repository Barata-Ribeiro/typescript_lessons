// Record
const object1: Record<string, string | number> = {
    name: 'Drake',
    surname: 'Williams',
    age: 23,
};

type PersonProtocol = {
    name?: string;
    surname?: string;
    age?: number;
};

// Required
type PersonRequired = Required<PersonProtocol>;
// Partial
type PersonPartial = Partial<PersonRequired>;
// Readonly
type PersonReadOnly = Readonly<PersonRequired>;
// Pick
type PersonPick = Pick<PersonProtocol, 'name' | 'surname'>;

const object2: PersonRequired = {
    name: 'Drake',
    surname: 'Williams',
    age: 23,
};

console.log(object1);
console.log(object2);

// Extract & Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

type AccountMongo = {
    _id: string;
    name: string;
    age: number;
    surname: string;
};

// type AccountApi = {
//     id: string;
//     name: string;
//     age: number;
// };

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string;
};

const accountMongo: AccountMongo = {
    _id: '23ruo293598ryew9tu03r0',
    name: 'Jason',
    surname: 'Bourne',
    age: 26,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Module mode
export default 1;
