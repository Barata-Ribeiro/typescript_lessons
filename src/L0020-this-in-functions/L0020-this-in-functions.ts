// import './formControls';

// Sets this a Date object, then passes the arguments
export function whatever(this: Date, name: string, age: number): void {
    console.log(this);
    console.log(name, age);
}
whatever.call(new Date(), 'Jason', 27);
whatever.apply(new Date(), ['Maria', 18]);
