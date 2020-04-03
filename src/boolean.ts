export { };//exportにしたらmoduleシステムにあるので、globalに定義する危険性がなくなる

let name = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });
