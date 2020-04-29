export {};

// class Wizard {}
// class Monk {}

// class Yamada extends Wizard, Monk {} // エラー：クラスで拡張できるクラスは 1 つのみです。

interface Wise {
  magic(): void;
}

interface Warrior {
  attack(): void;
}

class Takeda implements Wise, Warrior {
  // 抽象メソッド同様、implementsで実装するクラス側でメソッドの内容を設定していないとエラーになる。
  // ※エラー：クラス 'Takada' はインターフェイス 'Warrior' を正しく実装していません。Property 'attack' is missing in type 'Takada' but required in type 'Warrior'／クラス 'Takada' はインターフェイス 'Wise' を正しく実装していません。Property 'magic' is missing in type 'Takada' but required in type 'Wise'.
  magic(): void {
    console.log('イオナズン'); // => イオナズン
  }
  attack(): void {
    console.log('会心の一撃'); // => 会心の一撃
  }
}

const takeda = new Takeda();
takeda.magic();
takeda.attack();
