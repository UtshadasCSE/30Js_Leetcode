const age = 22;

const result = age >= 18 ? "You are an adult" : "You are a minor";
console.log(result);

function addNum() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans = ans + arguments[i];
  }
  return ans;
}
console.log(addNum(10, 230, 40, 20));
