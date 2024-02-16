function nameAndColorInverter<T extends new (...args: any) => any>(target: T) {
    console.log('I am the decorator, and I received: ', target);

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

@nameAndColorInverter
export class Animal {
    constructor(
        public name: string,
        public color: string,
    ) {
        console.log("I'm the constructor")
    }
}

const animal = new Animal('John', 'purple');
console.log(animal);
