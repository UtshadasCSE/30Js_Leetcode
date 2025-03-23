function findLargestNumber(arr) {
  let large = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
}

console.log(findLargestNumber([12, 12, 34, 53, 56, 11]));
