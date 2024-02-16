@decorator
export class Animal {
    constructor(
        public name: string,
        public color: string,
    ) {}
}

function decorator<T extends new (...args: any) => any>(target: T) {
    return class extends target {
        name: string;
        color: string;

        constructor(...args: any) {
            super(...args);
            this.name = this.inverter(args[0]);
            this.color = this.inverter(args[1]);
        }

        inverter(value: string): string {
            return value.split('').reverse().join('');
        }
    };
}

const animal = new Animal('John', 'purple');
console.log(animal);
