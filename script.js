const products = [
  { name: "Audífonos Inalámbricos", price: 39.99, image: "images/product1.jpg" },
  { name: "Reloj Smart", price: 59.99, image: "images/product2.jpg" },
  { name: "Zapatillas Urbanas", price: 49.99, image: "images/product3.jpg" },
  { name: "Lentes de Sol", price: 29.99, image: "images/product4.jpg" },
  { name: "Mochila Casual", price: 44.99, image: "images/product5.jpg" },
];

const productList = document.getElementById("product-list");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

let cart = [];

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((p, i) => {
    const card = document.createElement("div");
    card.classList.add("product");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">$${p.price.toFixed(2)}</p>
      <button class="add-btn" onclick="addToCart(${i})">Agregar al carrito</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
  alert("Producto agregado 🛒");
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <p>${item.name} - $${item.price.toFixed(2)}</p>
      <button onclick="removeFromCart(${i})">❌</button>
    `;
    cartItems.appendChild(div);
  });
  cartTotal.textContent = `$${total.toFixed(2)}`;
  cartCount.textContent = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

cartBtn.addEventListener("click", () => cartModal.classList.toggle("hidden"));
closeCart.addEventListener("click", () => cartModal.classList.add("hidden"));

document.querySelectorAll(".scroll-to").forEach(btn => {
  btn.addEventListener("click", e => {
    const target = document.querySelector(e.target.dataset.target);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

renderProducts();
