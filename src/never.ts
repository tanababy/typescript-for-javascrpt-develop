export { };

function error(message: string): never {
    throw new Error(message);
}
// throw文は、ユーザ定義の例外を発生させる。catch節に即座に移動させるz

try {
    // let result = error('test');
    console.log("momoko");
} catch (error) {
    // console.log({ error });
    console.log("minako");
}

// let foo: void = undefined;
// // let bar: never = undefined;//データを代入することができない
// let fer: never = error('test');//データを代入することができない