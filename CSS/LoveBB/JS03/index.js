let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let getSum = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};
console.log(getSum(arr)); // Output: 550

let getAverage = (arr) => {
  let sum = getSum(arr);
  return sum / arr.length;
};
console.log(getAverage(arr)); // Output: 55
let getMax = (arr) => {
  let max = arr[0];
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
};
console.log(getMax(arr)); // Output: 100
