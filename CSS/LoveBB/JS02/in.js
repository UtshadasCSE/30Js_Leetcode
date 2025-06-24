let person = {
  firstName: "Mayank",
  lastName: "Pandey",
  age: 21,
  hobbies: ["reading", "writing", "painting"],
  message: function () {
    console.log("Hi my name is " + this.firstName);
  },
};
person.message();
