export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Senga: Pitcher1 = {
  throwingSpeed: 160,
};

const Ichiro: Batter1 = {
  battingAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const Otani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
