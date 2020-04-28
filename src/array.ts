export {};

// let numbers = [1, 2, 3]; // JavaScript

// let numbers: number[] = [1, 2, 3]; // TypeScript

let numbers: Array<number> = [1, 2, 3]; // TypeScriptの書き方としては非推奨ではあるが、Interface（Array）とGenerics（今回の場合は、number）を使用して、このように書くことも可能。
let strings: Array<string> = ['tokyo', 'kyoto', 'osaka'];

let nijigenArray: number[][] = [
  [50, 100],
  [150, 300],
];

let somethingArray: (string | number | boolean)[] = [1, 'Tokyo', false];
