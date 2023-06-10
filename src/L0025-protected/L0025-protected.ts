export class Organization {
    readonly name: string;
    // Protected allows to access it in subclasses too. But not outside
    protected readonly workers: Member[] = [];
    private readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    addWorker(worker: Member): void {
        this.workers.push(worker);
    }

    showWorkers(): void {
        for (const worker of this.workers) {
            console.log(worker);
        }
    }

    getName(): string {
        return this.name;
    }
}

export class AppleInc extends Organization {
    constructor() {
        super('Apple Inc.', '23.546.934/0001-13');
    }

    workerPop(): Member | null {
        const worker = this.workers.pop();
        if (worker) return worker;
        return null;
    }
}

export class Member {
    constructor(public readonly name: string, public readonly surname: string) {}
}

const organization1 = new AppleInc();
const worker1 = new Member('John', 'Wick');
const worker2 = new Member('Samuel', 'Colt');
const worker3 = new Member('Jason', 'Bourne');

organization1.addWorker(worker1);
organization1.addWorker(worker2);
organization1.addWorker(worker3);
organization1.addWorker({
    name: 'Mike',
    surname: 'Brooks',
});
organization1.showWorkers();
console.log(organization1);
console.log(organization1.workerPop());
organization1.showWorkers();
