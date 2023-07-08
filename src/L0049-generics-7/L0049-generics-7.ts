export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

export function isString(value: unknown): value is string {
    return typeof value === 'string';
}

console.log(isNumber(1)); // true
console.log(isNumber('2')); // false
console.log(isString('4')); // true
console.log(isString(3)); // false

export function sum<T>(...args: T[]): number {
    const returnValue = args.reduce((sum, value) => {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);
    return returnValue;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, '2', 3)); // 4
console.log(sum('a', 'b', 'c')); // 0
console.log(sum(...[1, 2, 3, 'a', 'b', 'c', 1])); // 7
