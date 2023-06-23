type FilterCallback = (value: unknown, index?: number, array?: unknown[]) => boolean;

export function myFilter(array: unknown[], callbackfn: FilterCallback): unknown[] {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const originalFilteredArray = array.filter((value) => value < 5);
console.log(originalFilteredArray);

const myFilteredArray = myFilter(array, (value) => {
    if (typeof value === 'number') return value < 5;
    return false;
});
console.log(myFilteredArray);
