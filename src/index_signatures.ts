export {};

// let profile: {} = {};

// profile.name = 'Yamada'; // エラー:プロパティ 'name' は型 '{}' に存在しません。

// let profile: { name?: string } = {}; // オプショナルなメンバーを追加

// profile.name = 'Yamada';

// let profile: { name?: string } = {};

// profile.name = 'Yamada'; // エラー:プロパティ 'name' は型 '{}' に存在しません。
// profile.age = 30; // また、メンバーを追加する？

// インデックスシグネチャー：オブジェクトのインデックス。つまり、キーに該当する箇所をアノテーションするための署名のこと
// {[index: typeForIndex]: typeForValue}

// let profile: { [index: string]: string | number } = {};

// profile.name = 'Yamada';
// profile.age = 30;

// interface Profile {
//   [index: string]: string | number;
// }

// let profile: Profile = {};

// profile.name = 'Yamada';
// profile.age = 30;

interface Profile {
  name: string; // 必須項目
  underTwenty: boolean; // 必須項目
  [index: string]: string | number | boolean; // 任意の項目
}

let profile: Profile = { name: 'Yamada', underTwenty: false }; // 必須項目の初期値を設定

profile.name = 'Yamada';
profile.age = 30;
profile.nationality = 'Japan';
