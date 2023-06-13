export class Writer {
    // The tool attribute can be an instance of any subclass of the Tool class, or null.
    private _tool: Tool | null = null;

    // The constructor takes a name as argument.
    constructor(private _name: string) {}

    // Getter for the writer's name.
    get name(): string {
        return this._name;
    }

    // Setter for the tool attribute. It allows to change the tool the writer is using.
    set Tool(tool: Tool | null) {
        this._tool = tool;
    }

    // Getter for the tool attribute. It allows to retrieve the tool the writer is currently using.
    get Tool(): Tool | null {
        return this._tool;
    }

    // Method for the writer to write with the current tool.
    write(): void {
        // If no tool has been set, the writer cannot write and a message is printed in the console.
        if (this.Tool === null) {
            console.log("I can't write without a tool.");
            return;
        }
        // If a tool is set, the writer uses this tool's write method.
        this.Tool.write();
    }
}

// Tool is an abstract class which provides a blueprint for any tool that a Writer can use.
export abstract class Tool {
    // The constructor takes a name as argument.
    constructor(private _name: string) {}

    // Each subclass of Tool needs to implement this abstract method.
    abstract write(): void;

    // Getter for the tool's name.
    get name(): string {
        return this._name;
    }
}

// Pen is a concrete subclass of Tool, with its own implementation of the write method.
export class Pen extends Tool {
    write(): void {
        console.log(`The ${this.name} is writing.`);
    }
}

// TypeWriter is another concrete subclass of Tool, with a different implementation of the write method.
export class TypeWriter extends Tool {
    write(): void {
        console.log(`The ${this.name} is being typed.`);
    }
}

// Now we instantiate some objects:
const writer = new Writer('Jason');
const pen = new Pen('Bic');
const typewriter = new TypeWriter('Nakajima');


writer.Tool = typewriter;
writer.write();
