const formErrors = {
  name: "",
  email: "",
  validateForm(data) {
    this.name = data.name === "" ? "Name is required." : `${data.name}`;
    this.email = !data.email.includes("@") ? "Invalid email." : "";
  },
  hasErrors() {
    return this.name !== "" || this.email !== "";
  },
};

// Simulate form submission
formErrors.validateForm({ name: "ss", email: "testmail.com" });

if (formErrors.hasErrors()) {
  console.log(formErrors); // Shows both errors
}
