export { };

class Person {
    public name: string;//publicは省略可、むしろ書かないのが普通
    protected age: number;
    protected nationality: string;

    constructor(name: string, age: number, nationality: string) {//こいつはreturnしない
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    }
}
let taro = new Person('Momoko', 20, 'Japan');
console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());


class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        super(name, age, nationality);
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    }
}