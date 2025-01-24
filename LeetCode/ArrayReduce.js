function reduce(nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
}

let init = 0;
let nums = [1, 2, 3, 4];
function fn(accum, curr) {
  return accum + curr;
}

console.log(reduce(nums, fn, init));
