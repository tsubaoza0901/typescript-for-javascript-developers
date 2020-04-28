export {};

// 第二引数がなかった場合は、default引数（今回の場合は1.1）が採用される
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));
console.log(nextYearSalary(1000));
