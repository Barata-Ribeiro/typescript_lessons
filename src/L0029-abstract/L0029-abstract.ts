export abstract class Character {
    protected abstract emoji: string;

    constructor(
        protected name: string,
        protected attackPower: number,
        protected life: number,
    ) {}

    attack(character: Character): void {
        this.shoutOut();
        character.loseLife(this.attackPower);
    }

    loseLife(attackStrength: number): void {
        this.life -= attackStrength;
        console.log(`${this.emoji}: ${this.name} now have ${this.life} life left.`);
    }

    abstract shoutOut(): void;
}

export class Warlock extends Character {
    protected emoji = '\u{1F9D9}';

    shoutOut(): void {
        console.log(`${this.emoji} Feel the wrath of my magic!!!`);
    }
}
export class Dragon extends Character {
    protected emoji = '\u{1F409}';

    shoutOut(): void {
        console.log(`${this.emoji} UUUuuurraaaaaarrrr!!!`);
    }
}

const warlock = new Warlock('Edward', 100, 1000);
const greenDragon = new Dragon('Green Dragon', 87, 1000);

warlock.attack(greenDragon);
greenDragon.attack(warlock);
warlock.attack(greenDragon);
greenDragon.attack(warlock);
warlock.attack(greenDragon);
