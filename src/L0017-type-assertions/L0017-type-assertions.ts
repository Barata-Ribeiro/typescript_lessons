/* RECOMMENDED */

// Conditional
const body1 = document.querySelector('body');
// If there's no 'if' statement, then TypeScript
// will say body might be 'null'
if (body1) body1.style.background = 'red';

// Type Assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
// body3 no longer possibly null
body3.style.background = 'green';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Hello, World!';
input.focus();

/* NOT RECOMMENDED */

// forbidden non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'blue';

// Can only use subtypes and should never set HTML stuff with
// a different type. For example, can't be defined as type 'number'
const body4 = document.querySelector('body') as unknown as number;
// body4.style.background = 'yellow'; Can't use style because body
// is not a DOM element anymore
