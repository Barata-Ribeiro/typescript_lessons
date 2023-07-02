// export class person<T, U> {
//     constructor(public name: T, public age: U) {}
// }

// const person1 = new person('Jason', 27);
// const person2 = new person(['Jason'], 27);
// const person3 = new person(['Jason'], { age: 27 });
// const person4 = new person<string, number>('Jason', 27);

export class Stack<T> {
    private counter = 0;
    private elements: { [k: number]: T } = {};

    push(element: T): void {
        this.elements[this.counter] = element;
        this.counter += 1;
    }

    pop(): T | void {
        if (this.isEmpty()) return undefined;

        this.counter -= 1;
        const element = this.elements[this.counter];
        delete this.elements[this.counter];
        return element;
    }

    isEmpty(): boolean {
        return this.counter === 0;
    }

    stackSize(): number {
        return this.counter;
    }

    showStack(): void {
        for (const key in this.elements) {
            console.log(this.elements[key]);
        }
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
// const element1 = stack.pop();
stack.showStack();

while (!stack.isEmpty()) {
    console.log(stack.pop());
}
