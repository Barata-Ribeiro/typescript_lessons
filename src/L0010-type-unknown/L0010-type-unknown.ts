let x: unknown;

x = 234;
x = 'hello';
x = true;
x = 234234;
x = '32';
x = false;

const y = 234;

if (typeof x === 'number') console.log(x + y);
else console.log(x, `| 'x' is a ${typeof x}.`);

// By using 'unknown' we'll always have to check
// the type before accessing the property.
