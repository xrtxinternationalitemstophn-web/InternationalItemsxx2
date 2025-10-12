const products = [
  {
    name: "Audífonos Inalámbricos",
    price: 39.99,
    images: [
      "images/product1.jpg",
      "images/product2.jpg",
      "images/product3.jpg",
      "images/product4.jpg",
      "images/product5.jpg"
    ]
  },
  {
    name: "Reloj Smart",
    price: 59.99,
    images: [
      "images/reloj1.jpg",
      "images/reloj2.jpg",
      "images/reloj3.jpg",
      "images/reloj4.jpg",
      "images/reloj5.jpg"
    ]
  },
  // 🔹 puedes seguir agregando más productos igual
];


const FORMSPREE_URL = "https://formspree.io/f/xovkkovk";

const productList = document.getElementById("product-list");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const checkoutModal = document.getElementById("checkout-modal");
const closeCart = document.getElementById("close-cart");
const closeCheckout = document.getElementById("close-checkout");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const checkoutForm = document.getElementById("checkout-form");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = [];

// === Render products ===
function renderProducts() {
  productList.innerHTML = "";

  products.forEach((p, i) => {
    const card = document.createElement("div");
    card.classList.add("product");

    // contenedor del slider
    card.innerHTML = `
      <div class="slider" id="slider-${i}">
        ${p.images.map((img, index) => `
          <img src="${img}" class="slide ${index === 0 ? "active" : ""}" alt="${p.name}">
        `).join("")}
        <button class="prev" onclick="changeSlide(${i}, -1)">❮</button>
        <button class="next" onclick="changeSlide(${i}, 1)">❯</button>
      </div>
      <h3>${p.name}</h3>
      <p class="price">$${p.price.toFixed(2)}</p>
      <button class="add-btn" onclick="addToCart(${i})">Agregar al carrito</button>
    `;

    productList.appendChild(card);
  });

  startAutoSlides(); // inicia los slides automáticos
}


function addToCart(i) {
  cart.push(products[i]);
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
    div.innerHTML = `<p>${item.name} — $${item.price.toFixed(2)}</p>
      <button onclick="removeFromCart(${i})">❌</button>`;
    cartItems.appendChild(div);
  });
  cartTotal.textContent = `$${total.toFixed(2)}`;
  cartCount.textContent = cart.length;
}

function removeFromCart(i) {
  cart.splice(i, 1);
  updateCart();
}

// === Mostrar modales ===
cartBtn.addEventListener("click", () => cartModal.classList.toggle("hidden"));
closeCart.addEventListener("click", () => cartModal.classList.add("hidden"));
closeCheckout.addEventListener("click", () => checkoutModal.classList.add("hidden"));
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Tu carrito está vacío 🛒");
  } else {
    cartModal.classList.add("hidden");
    checkoutModal.classList.remove("hidden");
  }
});

// === Enviar formulario a Formspree con pedido ===
checkoutForm.addEventListener("submit", async e => {
  e.preventDefault();

  let total = cart.reduce((sum, i) => sum + i.price, 0);
  let pedido = cart.map(i => `- ${i.name}: $${i.price.toFixed(2)}`).join("\n");

  const formData = new FormData(checkoutForm);
  formData.append("pedido", pedido);
  formData.append("total", `$${total.toFixed(2)}`);

  try {
    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      showToast("✅ Pedido enviado correctamente ¡Gracias por tu compra!");
      checkoutForm.reset();
      cart = [];
      updateCart();
      checkoutModal.classList.add("hidden");
    } else {
      showToast("❌ Error al enviar el pedido.");
    }
  } catch {
    showToast("⚠️ Conexión fallida.");
  }
});

// === Toast visual ===
function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => toast.classList.remove("show"), 2500);
  setTimeout(() => toast.remove(), 3000);
}

renderProducts();

let currentSlides = []; // guarda el índice actual de cada producto
let autoIntervals = [];

function changeSlide(productIndex, direction) {
  const slides = document.querySelectorAll(`#slider-${productIndex} .slide`);
  let current = currentSlides[productIndex] || 0;

  slides[current].classList.remove("active");
  current = (current + direction + slides.length) % slides.length;
  slides[current].classList.add("active");
  currentSlides[productIndex] = current;
}

function startAutoSlides() {
  products.forEach((_, i) => {
    currentSlides[i] = 0;
    clearInterval(autoIntervals[i]);
    autoIntervals[i] = setInterval(() => changeSlide(i, 1), 3000); // cambia cada 3s
  });
}


// === VISOR DE IMÁGENES ===
const imageViewer = document.getElementById("image-viewer");
const viewerImg = document.getElementById("viewer-img");
const closeViewer = document.getElementById("close-viewer");

document.addEventListener("click", e => {
  // Si se hace click en una imagen de producto
  if (e.target.tagName === "IMG" && e.target.closest(".product")) {
    viewerImg.src = e.target.src;
    imageViewer.classList.remove("hidden");
  }
});

// Cerrar el visor
closeViewer.addEventListener("click", () => {
  imageViewer.classList.add("hidden");
});

// Cerrar al tocar fuera de la imagen (móvil o PC)
imageViewer.addEventListener("click", e => {
  if (e.target === imageViewer) {
    imageViewer.classList.add("hidden");
  }
});



