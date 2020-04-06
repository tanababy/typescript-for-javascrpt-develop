export { };

// owner
// 途中で変更できない
// 参照できる

//secretNumber
// 途中で変更できる
// 参照できない

class MyNumberCard {
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner() {
        return this._owner;
    }

    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber;
    }

    debugPrint() {
        return `secretNumber : ${this._secretNumber}`;
    }
}

let card = new MyNumberCard('Momoko', 728934561);
console.log(card.owner);
// card.owner = 'Shiraishi';
console.log(card.debugPrint());
card.secretNumber = 3956391;
console.log(card.debugPrint());
console.log(card.secretNumber);