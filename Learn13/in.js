const numbers = [1, 2, 3, 4, 5];

function doubleNumbers(arr) {
  return arr.map((number) => number * 2);
}
console.log(doubleNumbers(numbers));

numbers.find((number) => {
  return number > 3;
}); // Returns the first number greater than 3
