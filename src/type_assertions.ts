export {};

// let name: any = 'Yamada';

// let length = name.length;

// length = 'foo'; // 本来はnameの長さ（文字数）を入れるべき変数に文字列が入ってしまう。

// let name: any = 'Yamada';

// let length: number = name.length; // このように変数lengthに型を設定するのではなく、右辺の内容に従って型を断定したい。

// length = 'foo'; // エラー：型 '"foo"' を型 'number' に割り当てることはできません。

// 型アサーション
// let name: any = 'Yamada';

// let length = name.length as number;

// length = 'foo'; // エラー：型 '"foo"' を型 'number' に割り当てることはできません。

// let name: any = 'Yamada';

// let length = (name as string).length;

// length = 'foo'; // エラー：型 '"foo"' を型 'number' に割り当てることはできません。

let name: any = 'Yamada';

let length = (<string>name).length; // ただし、この書き方はreactで用いられるJSXの書き方と似ているため非推奨

// length = 'foo'; // エラー：型 '"foo"' を型 'number' に割り当てることはできません。
