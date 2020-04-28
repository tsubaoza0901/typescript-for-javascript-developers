export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

type Profile = {
  name: string;
  age: number;
};

const example1: Profile = {
  name: 'yamada',
  age: 30,
};

const example2 = {
  name: 'okamoto',
  age: 25,
};

type Profile2 = typeof example2;

const example3: Profile2 = {
  name: 'takeyama',
  age: 35,
};
