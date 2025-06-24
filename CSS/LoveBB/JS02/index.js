let products = [
  {
    name: "Laptop",
    price: 1200,
  },
  {
    name: "Smartphone",
    price: 800,
  },
  {
    name: "Tablet",
    price: 600,
  },
  {
    name: "Smartwatch",
    price: 300,
  },
];

let expensiveProducts = products.filter((products) => products.price > 500);
console.log(expensiveProducts);
