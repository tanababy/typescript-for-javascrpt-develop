export { };

namespace Japanese {

    export namespace Tokyo {
        export class Person {
            constructor(public name: string) { }
        }
    }

}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) { }
    }
}
const me = new Japanese.Tokyo.Person('momoko!');
const me2 = new English.Person('hey!', 'hey!', 'hey!');
console.log(me.name);
console.log(me2.firstName);
