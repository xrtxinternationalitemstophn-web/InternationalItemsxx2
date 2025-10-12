const products = [
  { name: "Audífonos Inalámbricos", price: 39.99, image: "images/product1.jpg" },
  { name: "Reloj Smart", price: 59.99, image: "images/product2.jpg" },
  { name: "Zapatillas Urbanas", price: 49.99, image: "images/product3.jpg" },
  { name: "Lentes de Sol", price: 29.99, image: "images/product4.jpg" },
  { name: "Mochila Casual", price: 44.99, image: "images/product5.jpg" },
];

const FORMSPREE_URL = "https://formspree.io/f/xovkkovk"; // 👈 Pega aquí tu enlace de Formspree

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
  showToast("Producto agregado 🛒");
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

// === FINALIZAR COMPRA ===
document.querySelector(".btn-checkout").addEventListener("click", async () => {
  if (cart.length === 0) {
    showToast("Tu carrito está vacío 🛒");
    return;
  }

  let total = cart.reduce((sum, item) => sum + item.price, 0);
  let pedido = cart.map(i => `- ${i.name}: $${i.price.toFixed(2)}`).join("\n");

  const formData = new FormData();
  formData.append("pedido", pedido);
  formData.append("total", `$${total.toFixed(2)}`);

  try {
    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (res.ok) {
      showToast("✅ Pedido enviado correctamente. ¡Gracias por tu compra!");
      cart = [];
      updateCart();
      cartModal.classList.add("hidden");
    } else {
      showToast("❌ Error al enviar el pedido. Intenta de nuevo.");
    }
  } catch {
    showToast("⚠️ Conexión fallida. Verifica tu red.");
  }
});

// === INTERFAZ ===
cartBtn.addEventListener("click", () => cartModal.classList.toggle("hidden"));
closeCart.addEventListener("click", () => cartModal.classList.add("hidden"));

document.querySelectorAll(".scroll-to").forEach(btn => {
  btn.addEventListener("click", e => {
    const target = document.querySelector(e.target.dataset.target);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// === ALERTA BONITA (TOAST) ===
function showToast(msg) {
  let toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.classList.add("show"); }, 100);
  setTimeout(() => { toast.classList.remove("show"); }, 2500);
  setTimeout(() => { toast.remove(); }, 3000);
}

renderProducts();
