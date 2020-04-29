export {};

// 動的メンバー
// class Person {
//   isProgrammer: boolean = true;
//   firstName: string = 'Yamada';
//   lastName: string = 'Taro';
// }

// let person = new Person();
// console.log(person.isProgrammer); // => true

// // 静的メンバー
// class Person {
//   static isProgrammer: boolean = true;
//   static firstName: string = 'Yamada';
//   static lastName: string = 'Taro';
// }

// console.log(Person.isProgrammer); // => true

// // 静的メンバー
// class Person {
//   static isProgrammer: boolean = true;
//   static firstName: string = 'Yamada';
//   static lastName: string = 'Taro';

//   static work() {
//     return "Let's work!";
//   }
// }

// console.log(Person.work()); // => Let's work!

// // 静的メンバー
// class Person {
//   static isProgrammer: boolean = true;
//   static firstName: string = 'Yamada';
//   static lastName: string = 'Taro';

//   static work() {
//     return `Hey, ${Person.firstName} Let's work!`; // ""を``（バッククォート）に変更する点に注意
//   }
// }

// console.log(Person.work()); // => Hey, Yamada Let's work!

// 静的メンバー
class Person {
  static isProgrammer: boolean = true;
  static firstName: string = 'Yamada';
  static lastName: string = 'Taro';

  static work() {
    return `Hey, ${this.firstName} Let's work!`;
  }
}

console.log(Person.work()); // => Hey, Yamada Let's work!
