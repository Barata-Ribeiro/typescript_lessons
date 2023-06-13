export class Writer {
    private _tool: Tool | null = null;

    constructor(private _name: string) {}

    get name(): string {
        return this._name;
    }

    // Set the tool to use.
    set Tool(tool: Tool | null) {
        this._tool = tool;
    }

    // Get the tool that will be used. Or null if none.
    get Tool(): Tool | null {
        return this._tool;
    }

    // The writer writes
    write(): void {
        // But if the tool is null, he can't write anything.
        if (this.Tool === null) {
            console.log("I can't write without a tool.");
            return;
        }
        this.Tool.write();
    }
}

export abstract class Tool {
    constructor(private _name: string) {}
    abstract write(): void;

    get name(): string {
        return this._name;
    }
}

export class Pen extends Tool {
    write(): void {
        console.log(`The ${this.name} is writing.`);
    }
}

export class TypeWriter extends Tool {
    write(): void {
        console.log(`The ${this.name} is being typed.`);
    }
}

const writer = new Writer('Jason');
const pen = new Pen('Bic');
const typewriter = new TypeWriter('Nakajima');

// console.log(writer.name);
// console.log(pen.name);
// console.log(typewriter.name);

writer.Tool = typewriter;
writer.write();
