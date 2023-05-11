type Age = number;
type Person = {
    name: string; //  defining type here...
    age: Age; // type already defined outside...
    wage: number;
    favoriteColor?: string;
};
// Union types
type RGBColor = 'Red' | 'Green' | 'Blue';
type CMYKColor = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type FavoriteColor = RGBColor | CMYKColor;

export const firstPerson: Person = {
    name: 'John Doe',
    age: 30,
    wage: 100_000, // 100000
};

// Function receives a parameter 'person' of type Person
// receives a parameter 'color' of type FavoriteColor
export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
    // returns a 'person' with a new property 'favoriteColor' of type FavoriteColor
    return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(firstPerson, 'Red')); // { name: 'John Doe', favoriteColor: 'Black
console.log(firstPerson); // { name: 'John Doe', age: 30, wage: 100000 }
