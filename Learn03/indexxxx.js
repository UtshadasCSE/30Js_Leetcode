// let marks = [10, 20, 30, 40, 50];

// let text = "";

// marks.forEach(myFunction);

// function myFunction(value, index, array) {
//   text += value;
// }
// console.log(text);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let powerNumber = numbers.map((number) => {
  return number * 2;
});

console.log(numbers);
console.log(powerNumber);

const names = ["John", "Jane", "Jack", "Jill"];

const printName = names.map((name) => {
  return name;
});

console.log(printName);

let findName = names.filter((name) => name === "Jane");
console.log(findName);
