export {};

// class
class Human {}

// classを用いたインスタンスの生成
let taro = new Human();
let hanako = new Human();

// コンストラクタメソッド（new演算子でclassのインスタンスを生成する際に、自動的に呼び出されるメソッド）
// →new演算子を使ってインスタンスを生成する際に、クラス名の後の丸括弧に引数を渡してあげることでコンストラクタメソッドの引数に。
class Person {
  name: string;
  age: number;

  // コンストラクタメソッドによる初期化 ※ コンストラクタにはreturnがなく、戻り値に対するアノテーションは書かない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // テンプレートストリングを利用したクラスメソッドの作成
  profile(): string {
    // テンプレートストリング
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let takashi = new Person('Takashi', 30);
console.log(takashi.profile()); // => name: Takashi, age: 30
