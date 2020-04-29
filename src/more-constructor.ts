export {};

class Person {
  // アクセス修飾子を追加
  constructor(public name: string, protected age: number) {}
}

const person = new Person('yamada', 30);
console.log(person);
