export {};

// class Person {
//   constructor(public name: string) {}
// }

// // エラー：識別子 'Person' が重複しています。
// class Person {
//   constructor(
//     public firstName: string,
//     public middleName: string,
//     public lastName: string
//   ) {}
// }

// const person = new Person('Yamada');
// console.log(person.name);

// // 名前空間
// namespace Japanese {
//   export class Person {
//     constructor(public name: string) {}
//   }
// }

// // 名前空間
// namespace English {
//   export class Person {
//     constructor(
//       public firstName: string,
//       public middleName: string,
//       public lastName: string
//     ) {}
//   }
// }

// const person = new Japanese.Person('Yamada');
// console.log(person.name); // => Yamada

// const michael = new English.Person('Michael', 'Joseph', 'Jackson');
// console.log(michael); // => Person {firstName: 'Michael', middleName: 'Joseph', lastName: 'Jackson' }

// 名前空間
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

class Person {
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {}
}

const tokyoPerson = new Japanese.Tokyo.Person('Yamada');
console.log(tokyoPerson.name); // => Yamada

const osakaPerson = new Japanese.Tokyo.Person('やまでぃー');
console.log(osakaPerson.name); // => やまでぃー
