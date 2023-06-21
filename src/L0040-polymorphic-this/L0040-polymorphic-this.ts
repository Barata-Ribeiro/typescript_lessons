export class Calculator {
    constructor(public number: number) {}

    add(n: number): this {
        this.number += n;
        return this;
    }

    sub(n: number): this {
        this.number -= n;
        return this;
    }

    div(n: number): this {
        this.number /= n;
        return this;
    }

    mul(n: number): this {
        this.number *= n;
        return this;
    }
}

export class SubCalculator extends Calculator {
    pow(n: number): this {
        this.number **= n;
        return this;
    }
}

const calculator = new SubCalculator(10);
calculator.add(5).mul(2).div(2).sub(5).pow(2);
console.log(calculator);
