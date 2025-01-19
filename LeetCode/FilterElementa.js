const filter = (arr, fn) => {
  let filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr;
};

const arr = [12, 2, 3, 4, 5, 6, 64, 2, , 56, 3];
const greaterThan = (n) => {
  return n > 23;
};

console.log(filter(arr, greaterThan));
