// Use type 'any' only as a last resort.
function showMessage(msg: string) {
    return msg;
}

console.log(showMessage('Hello, world!'));

// The ones below can't be used with type string
// console.log(showMessage([1, 2, 3, 4, 5]));
// console.log(showMessage(5234));
