const products = [
  {
    title: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80",
    price: "$59.99",
  },
  {
    title: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80",
    price: "$129.00",
  },
  {
    title: "Gaming Mouse",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80",
    price: "$39.00",
  },
  {
    title: "Mini Projector",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80",
    price: "$99.00",
  },
];

const productContainer = document.getElementById("productContainer");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h3>${product.title}</h3>
    <p>${product.price}</p>
  `;

  productContainer.appendChild(card);
});
