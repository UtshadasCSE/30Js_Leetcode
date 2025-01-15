const createCounter = (init) => {
  return {
    value: init,
    increment: function () {
      return ++this.value;
    },
    decrement: function () {
      return --this.value;
    },
    reset: function () {
      return (this.value = init);
    },
  };
};

const counter = createCounter(10);
console.log(counter.increment()); // 11;
