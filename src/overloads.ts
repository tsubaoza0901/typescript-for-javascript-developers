export {};

// signature（シグニチャー）：引数と戻り値の型定義を行う
function double(value: number): number;
function double(value: string): string;

// 実体
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));
