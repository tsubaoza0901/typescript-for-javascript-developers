export {};

// ①引数に対するアノテーション ②returnに対するアノテーション
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.79, 83));
