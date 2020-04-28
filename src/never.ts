export {};

// never：「this function never return（呼び元に戻ってこない）」の意
function error(message: string): never {
  throw new Error(message);
}

// エラーハンドリングの記述
try {
  let result = error('test');
  console.log(result); // returnされない（戻り値がない）ため表示されない
} catch (error) {
  console.log({ error }); // errorの内容が表示される
}

// let foo: void = undefined;
// let bar: never = undefined; // エラー：型 'undefined' を型 'never' に割り当てることはできません。
