export { };

class Person {
    constructor(public name: string, protected age: number) { }
}

const me = new Person('ももこ', 20);
console.log(me);

