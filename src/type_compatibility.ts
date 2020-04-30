export {};

// 型の互換性の基本
// 型の互換性有の場合
// any型とstring型
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); // => undefined

fooCompatible = barCompatible;

console.log(typeof fooCompatible); // => string

// string型とstring型
let fooString: string;
let barString: string = 'string';

fooString = barString;

// string型と文字列literal型
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral; // 文字列literal型は文字列型の一部

// number型と数値literal型
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral; // 数値literal型は数値型の一部

// 型の互換性無の場合
// string型とnumber型
let fooInCompatible: string;
let barInCompatible: number = 1;

// fooInCompatible = barInCompatible; // エラー：型 'number' を型 'string' に割り当てることはできません。

// // 型の互換性の応用
// // 型の互換性有の場合
// interface Animal {
//   // age: number; // コメントアウトしてもエラーにならない
// }

// class Person {
//   constructor(public age: number) {}
// }

// let me: Animal;
// me = new Person(43);

// // 型の互換性無の場合
// interface Animal {
//   age: number;
//   name: string;
// }

// class Person {
//   constructor(public age: number) {}
// }

// let me: Animal;
// me = new Person(43); // エラー：Property 'name' is missing in type 'Person' but required in type 'Animal'.

// ＜解決方法＞ 構造的部分型
// オブジェクト間の代入の場合には、型の互換性が絶対に評価される。その際、各の型が一致しているかどうかは重要ではなく、代入されるオブジェクトの内部に持つメンバーが代入するオブジェクトでも存在するかどうか、そしてそのメンバーの型に互換性があるかを評価。この時、クラスの継承関係やinterfaceを実装しているかどうかは関係ない
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'Yamada');
