export { };

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Yuki';
    static lastName: string = 'Tanabe';

    static work(): string {
        return `Hey guys! This is ${this.firstName} Are you interested in Type Script?`;
    }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);//インスタンス生成しなくてもアクセスできる！
console.log(Me.work());