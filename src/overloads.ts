export { };

// function double(value: number): number;
// function double(value: string): string;

let double = (value: string | number): string | number => {
    if (typeof value === 'number') {
        return value * 2;
    } else if (typeof value === 'string') {
        return value + value;
    } else {
        throw 'hi?';
    }
};
// let double = (value: string): string => value + value;
// function double(value: any): any {
//     if (typeof value === 'number') {
//         return value * 2;
//     } else if (typeof value === 'string') {
//         return value + value;
//     }
// }



console.log(double(100));
console.log(double('Momoko'));