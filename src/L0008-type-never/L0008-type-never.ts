export function createError(): never {
    throw new Error('Test Error');
    // Doesn't return anything... will only break the app
}

createError();
