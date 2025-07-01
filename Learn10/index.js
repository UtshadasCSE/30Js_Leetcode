const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming", "hiking"],
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

const checkGamming = () => {
  if (person.hobbies.includes("gaming")) {
    return `${person.name} likes gaming.`;
  }
};

const checkVote =
  person.age >= 18 ? "Eligible to vote." : "Not eligible to vote.";

person.greet();
console.log(checkVote);
console.log(checkGamming());
