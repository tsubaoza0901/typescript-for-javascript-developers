export {};

let name = 'Yamada';

name = 'Okamoto';

let nickname = 'Okamoto' as const;
// nickname = 'Okayan'; // エラー：型 '"Okayan"' を型 '"Okamoto"' に割り当てることはできません。
nickname = 'Okamoto'; // つまり、nicknameは事実上の定数

// オブジェクトでも
let profile = {
  name: 'Yamada',
  height: 180,
} as const;

// profile.name = 'Takeda'; // エラー:Cannot assign to 'name' because it is a read-only property.
// profile.height = 190; // エラー：Cannot assign to 'height' because it is a read-only property.
