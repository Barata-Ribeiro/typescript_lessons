function nameAndColorInverter(param1: string, param2: string) {
    // Closure
    return function <T extends new (...args: any) => any>(target: T) {
        console.log('I am the decorator, and I received: ', target);

        return class extends target {
            name: string;
            color: string;

            constructor(...args: any) {
                super(...args);
                this.name = this.inverter(args[0]) + " " + param1;
                this.color = this.inverter(args[1]) + " " + param2;
            }

            inverter(value: string): string {
                return value.split('').reverse().join('')
            }
        };
    }
}


@nameAndColorInverter('Value1', 'Value2')
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
