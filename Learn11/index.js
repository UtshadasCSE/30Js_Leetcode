let addNumbers = (...numbers) => {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return res;
};
console.log(addNumbers(1, 2, 3, 4, 5)); // Output: 15
