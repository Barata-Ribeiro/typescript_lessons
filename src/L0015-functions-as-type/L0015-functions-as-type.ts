type MapStringsCallback = (item: string) => string;

export function mapStrings(array: string[], callbackFn: MapStringsCallback): string[] {
    const newArray: string[] = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackFn(item));
    }
    return newArray;
}

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
const abcUpperCase = mapStrings(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcUpperCase); // ['A', 'B', 'C', 'D', 'E', 'F']
