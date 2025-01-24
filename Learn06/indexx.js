let numbers = [1203, 3845, 4957, 3874, 3, 2];

let minMax = numbers.sort((a, b) => {
  return a - b;
});
// let maxMin = numbers.sort((a, b) => {
//   return b - a;
// });
console.log(minMax);
// console.log(maxMin);
