export { };

class Animal {
    constructor(public name: string) { }

    run(): string {
        return 'I can run';
    }
}

class Lion extends Animal {
    public speed: number;

    constructor(name: string, speed: number) {
        super(name);

        this.speed = speed;
    }

    run(): string {
        return `${super.run()} ${this.speed}km/h`;
    }
}

// let animal = new Animal();
// let lion = new Lion();
// console.log(lion.run());
console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 100).run());