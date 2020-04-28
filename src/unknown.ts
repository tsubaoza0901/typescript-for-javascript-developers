export {};

const somethingKansu = (): number => 43;

let numberAny: any = somethingKansu();
let numberUnknown: unknown = somethingKansu();

let sumAny = numberAny + 10;
// console.log(typeof numberUnknown); // => number
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
