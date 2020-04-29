export {};

class MyNumberCard {
  private _owner: string; // get ownerと識別子が被る（Duplicate identifer 'owner'）ため、ownerを_ownerに修正
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner; // ownerを_ownerに修正
    this._secretNumber = secretNumber;
  }
  get owner() {
    return this._owner; // ownerを_ownerに修正
  }
  // setter
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  // 変更内容確認用に一時的に設置
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('山田 太郎', 12345678);
console.log(card.owner); // => 山田 太郎 ※ 参照できるように
// card.owner = '岡本 太郎'; // エラー：Cannot assign to 'owner' because it is a read-only property. ※ getterは読み取りのみ
console.log(card.debugPrint());
card.secretNumber = 11111111;
console.log(card.debugPrint());
