const once = function (fn) {
  let called = false; //use this variable to track is it already called or not
  //   return a new function that wraps "fn"
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
};

const fn = (a, b, c) => a + b + c;

const onceFn = once(fn);
console.log(onceFn(1, 2, 4));
