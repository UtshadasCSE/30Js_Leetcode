const addNumb = (a, b, ab) => {
  let res = a + b;
  ab(res);
};

addNumb(1, 2, (result) => {
  console.log(result); // Output: 3
});

const addNumbers = (...numbers) => {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return res;
};
console.log(addNumbers(1, 2, 3, 4, 5)); // Output: 15

const num = (a, b, ab) => {
  let res = a + b;
  ab(res);
  return () => {
    console.log(res);
  };
};
let result = num(1, 2, () => {});
result(); // Output: 3
