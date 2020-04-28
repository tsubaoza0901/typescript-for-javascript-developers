export {};

// // ユニオン型の場合、配列内の順序は不問
// let profile: (string | number)[] = ['yamada', 35];
// profile = [30, 'okamoto'];

// tuple型の場合は、配列内の順序も指定した型と対応
let profile: [string, number] = ['yamada', 35];
// profile = [30, 'okamoto']; // エラー：型 'number' を型 'string' に割り当てることはできません。／型 'string' を型 'number' に割り当てることはできません。
