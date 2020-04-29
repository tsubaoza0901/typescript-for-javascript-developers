export {};

class Person {
  // メンバー変数にアクセス修飾子を追加
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  // ageに対してclass内からアクセス
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// Personクラスを継承したclass
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  // profile(): string {
  //   return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`; //エラー： プロパティ 'age' はプライベートで、クラス 'Person' 内でのみアクセスできます。
  // }
}

let takashi = new Person('Takashi', 30, 'Japan');
console.log(takashi.profile()); // => name: Takashi, age: 30
// console.log(takashi.age); // エラー：プロパティ 'age' はプライベートで、クラス 'Person' 内でのみアクセスできます。

// protected：クラスを継承したクラスからのアクセスが可能
