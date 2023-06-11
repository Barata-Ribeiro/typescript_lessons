// Singleton - GoF | Factory Method - GoF
export class Database {
    private static database: Database;

    private constructor(
        private host: string,
        private user: string,
        private password: string,
    ) {}

    connect(): void {
        console.log(
            `Connecting to ${this.host} as ${this.user} using ${this.password}...`,
        );
    }

    // Factory Method
    static getDatabase(host: string, user: string, password: string): Database {
        if (Database.database) {
            console.log('Returning existing database:');
            return Database.database;
        }
        console.log('Creating new database:');
        Database.database = new Database(host, user, password);
        return Database.database;
    }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

console.log(db1 === db2); // They are the same

// const db1 = new Database('localhost', 'root', '123456');
// db1.connect();

// const db2 = new Database('localhost', 'root', '123456');
// db2.connect();

// console.log(db1 === db2); // They're not the same
