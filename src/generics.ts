export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// ジェネリクス関数 ※Tは型引数と呼ばれ、stringにもnumberにもなる抽象的な型（慣習的にTを用いる）
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('hello!'));
console.log(echo<boolean>(true));

// ジェネリクスクラス
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('hello, generics!').echo());
console.log(new Mirror<boolean>(true).echo());
