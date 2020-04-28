export {};

let profile: object = { name: 'yamada' };
profile = { birthdayYear: 1987 };

// プロパティに対する型指定
let profile2: {
  name: string;
} = { name: 'yamada' };
// profile2 = { birthdayYear: 1987 }; // エラー：型 '{ birthdayYear: number; }' を型 '{ name: string; }' に割り当てることはできません。
