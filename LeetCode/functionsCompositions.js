const funCompositions = (functions) => {
  return (x) => {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};

const fn = funCompositions([(x) => x + 3, (x) => x * 3]);

console.log(fn(3));
