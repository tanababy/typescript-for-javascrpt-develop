export { };

class VisaCard {
    constructor(public readonly owner: string) { }
}

let myVisaCard = new VisaCard('Momoko');
// myVisaCard.owner = 'XXX';
console.log(myVisaCard.owner);