export class Organization {
    // Despite being readonly, it will receive a value from the server,
    // but we can't change it anymore.
    public readonly name: string; // 'public' is redudant, not necessary to tell
    private readonly workers: Member[] = [];
    protected readonly cnpj: string;

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
}

// OrgWorker from 'Organization' will only accept from the class OrgWorker.
export class Member {
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
