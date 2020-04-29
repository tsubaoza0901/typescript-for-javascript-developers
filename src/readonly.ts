export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('山田 太郎');
console.log(myVisaCard.owner); // => 山田 太郎
// myVisaCard.owner = '岡本 太郎'; // エラー：Cannot assign to 'owner' because it is a read-only property.
