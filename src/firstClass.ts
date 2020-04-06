export { };

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {//こいつはreturnしない
        this.name = name;
        this.age = age;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`
    }
}
let taro = new Person('Momoko', 20);
// console.log(taro.profile());