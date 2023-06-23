type MyType = number;

export const numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(numberArray);

async function promiseAsync() {
    return 1;
}

function anotherPromise(): Promise<MyType> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
}

promiseAsync().then((value) => console.log(value + 1));
anotherPromise().then((value) => console.log(value + 1));
