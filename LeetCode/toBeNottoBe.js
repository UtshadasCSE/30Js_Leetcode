var expect = function (val) {
  return {
    toBe: (expected) => {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (expected) => {
      if (val !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(1).toBe(1));
console.log(expect(1).notToBe(2));
