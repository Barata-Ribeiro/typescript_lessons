// Optional Chaining and Null Coalescing Operator
export type Document = {
    title: string;
    text: string;
    date?: Date;
};

const newDocument: Document = {
    title: 'The Title',
    text: 'The Text',
    // date: new Date(),
};

console.log(newDocument.date); // undefined if 'date' does not exist
console.log(newDocument.date?.toDateString() ?? "Sorry, date doesn't exist!");
console.log(undefined ?? "Sorry, info... doesn't exist!");
console.log(null ?? "Sorry, there isn't any info...");
console.log(false ?? "Sorry, there isn't any info..."); // Returns 'false'
console.log(0 ?? "Sorry, there isn't any info..."); // Returns '0'
