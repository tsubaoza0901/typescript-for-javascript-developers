export {};

// 親クラス
class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

// 親クラスを継承した子クラス
class Lion extends Animal {
  public speed: number;

  constructor(public name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    // super.runで親メソッドの戻り値を利用することができる。
    return `${super.run()} ${this.speed}km`;
  }
  walk(): string {
    return `I always walk ${this.speed}km`;
  }
}

console.log(new Animal('Cat').run()); // => I can run
console.log(new Lion('Dog', 80).walk()); // => I always walk 80km
console.log(new Lion('Dog', 80).run()); // => I can run 80km
