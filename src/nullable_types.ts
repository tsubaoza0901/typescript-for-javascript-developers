export {};

// ageがわからない人がいる場合、、
let profile: { name: string; age: number | null } = {
  name: 'Yamada',
  age: null, // エラー：型 'null' を型 'number' に割り当てることはできません。
};
