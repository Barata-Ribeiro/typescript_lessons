export class Organization {
    readonly name: string; // 'public' not required; already public
    // 'private' will only be used inside the class
    private readonly workers: Member[] = [];
    protected readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    addWorker(worker: Member): void {
        this.workers.push(worker);
    }

    // This is a public method that will manipulate a private property
    // It's easier and safer this way.
    showWorkers(): void {
        for (const worker of this.workers) {
            console.log(worker);
        }
    }

    // This is extremely redundant because 'this.name' is already public
    getName(): string {
        return this.name;
    }
}

export class Member {
    // Public must be specified here in the shortcut constructor
    // It's not redundant
    constructor(public readonly name: string, public readonly surname: string) {}
}

const organization1 = new Organization('Apple Inc.', '23.546.934/0001-13');
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

// Accessing outside the class
console.log(organization1.getName());
