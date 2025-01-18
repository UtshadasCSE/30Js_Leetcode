const map = (arr, fn) => {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
const plusOne = (n) => {
  return n + 1;
};

console.log(map(arr, plusOne));
