export {};

let name = 'Yamada';

name = 'Okamoto';

let nickname = 'Okamoto' as const;
// nickname = 'Okayan'; // エラー：型 '"Okayan"' を型 '"Okamoto"' に割り当てることはできません。
// nickname = 'Okamoto'; // 事実上の定数
