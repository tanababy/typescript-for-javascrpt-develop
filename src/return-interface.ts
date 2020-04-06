export { };

class Mahoutsukai { }
class Souryo { }

class Taro extends Mahoutsukai { }

interface Kenjya {
    ionazun(): void;
}

interface Senshi {
    kougeki(): void;
}

class Jiro implements Kenjya, Senshi {
    ionazun(): void {
        console.log('BBBBBBBBBBB!!!');
    }

    kougeki(): void {
        console.log('BUSH!');
    }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
