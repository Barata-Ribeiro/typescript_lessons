enum Colors {
    RED, // 0
    GREEN, // 1
    BLUE = 100, // 100
}

// This enum will merge with the previous enum.
enum Colors {
    PURPLE = 'PURPLE', // PURPLE
    YELLOW = 101, // Must have a value, or it won't know...
}

console.log(Colors);
console.log(Colors.RED); // 0
console.log(Colors[0]); // RED
console.log(Colors.PURPLE); // PURPLE
console.log(Colors.YELLOW); // 101

export function chooseColors(color: Colors): void {
    console.log(Colors[color]);
}

chooseColors(Colors.YELLOW); // YELLOW
