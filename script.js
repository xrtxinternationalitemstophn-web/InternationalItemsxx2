/******************************************
 * 🔹 RAUDA SHOP - SCRIPT COMPLETO 🔹
 ******************************************/

// === LISTA DE PRODUCTOS ===
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
  {
    name: "Zapatillas Urbanas",
    price: 49.99,
    images: [
      "images/tenis1.jpg",
      "images/tenis2.jpg",
      "images/tenis3.jpg",
      "images/tenis4.jpg",
      "images/tenis5.jpg"
    ]
  },
  {
    name: "Lentes de Sol",
    price: 29.99,
    images: [
      "images/lentes1.jpg",
      "images/lentes2.jpg",
      "images/lentes3.jpg",
      "images/lentes4.jpg",
      "images/lentes5.jpg"
    ]
  },
  {
    name: "Mochila Casual",
    price: 44.99,
    images: [
      "images/mochila1.jpg",
      "images/mochila2.jpg",
      "images/mochila3.jpg",
      "images/mochila4.jpg",
      "images/mochila5.jpg"
    ]
  }
];

// === CONFIGURACIÓN ===
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

/* === RENDERIZAR PRODUCTOS CON SLIDER === */
function renderProducts() {
  productList.innerHTML = "";
  products.forEach((p, i) => {
    const card = document.createElement("div");
    card.classList.add("product");

    card.innerHTML = `
      <div class="slider" id="slider-${i}">
        <div class="slides-container">
          ${p.images.map((img, index) => `
            <img src="${img}" class="slide ${index === 0 ? "active" : ""}" alt="${p.name}">
          `).join("")}
        </div>
        <button class="prev" data-index="${i}">❮</button>
        <button class="next" data-index="${i}">❯</button>
      </div>
      <h3>${p.name}</h3>
      <p class="price">$${p.price.toFixed(2)}</p>
      <button class="add-btn" onclick="addToCart(${i})">Agregar al carrito</button>
    `;
    productList.appendChild(card);
  });

  initSliders();
}

/* === SLIDERS AUTOMÁTICOS Y MANUALES === */
let slideIndices = [];
let slideIntervals = [];

function initSliders() {
  products.forEach((_, i) => {
    slideIndices[i] = 0;
    const slides = document.querySelectorAll(`#slider-${i} .slide`);
    const prevBtn = document.querySelector(`#slider-${i} .prev`);
    const nextBtn = document.querySelector(`#slider-${i} .next`);

    // Mostrar flechas
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";

    // Botones manuales
    prevBtn.addEventListener("click", () => changeSlide(i, -1));
    nextBtn.addEventListener("click", () => changeSlide(i, 1));

    // Auto cambio cada 3 segundos
    clearInterval(slideIntervals[i]);
    slideIntervals[i] = setInterval(() => changeSlide(i, 1), 3000);
  });
}

function changeSlide(productIndex, direction) {
  const slides = document.querySelectorAll(`#slider-${productIndex} .slide`);
  if (!slides.length) return;
  slides[slideIndices[productIndex]].classList.remove("active");
  slideIndices[productIndex] =
    (slideIndices[productIndex] + direction + slides.length) % slides.length;
  slides[slideIndices[productIndex]].classList.add("active");
}

/* === CARRITO === */
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
    div.innerHTML = `
      <p>${item.name} — $${item.price.toFixed(2)}</p>
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

cartBtn.addEventListener("click", () => {
  cartModal.classList.toggle("hidden");
  document.body.classList.toggle("modal-open");
});

closeCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
});

// 🔹 Cerrar carrito al hacer clic fuera del contenido
cartModal.addEventListener("click", e => {
  if (e.target === cartModal) {
    cartModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
});


closeCheckout.addEventListener("click", () => checkoutModal.classList.add("hidden"));
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) showToast("Tu carrito está vacío 🛒");
  else {
    cartModal.classList.add("hidden");
    checkoutModal.classList.remove("hidden");
  }
});

/* === ENVÍO A FORMSPREE === */
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
    } else showToast("❌ Error al enviar el pedido.");
  } catch {
    showToast("⚠️ Conexión fallida.");
  }
});

/* === LIGHTBOX PARA AMPLIAR IMAGEN === */
const imageViewer = document.getElementById("image-viewer");
const viewerImg = document.getElementById("viewer-img");
const closeViewer = document.getElementById("close-viewer");

document.addEventListener("click", e => {
  if (e.target.classList.contains("slide")) {
    viewerImg.src = e.target.src;
    imageViewer.classList.remove("hidden");
  }
});

closeViewer.addEventListener("click", () => imageViewer.classList.add("hidden"));
imageViewer.addEventListener("click", e => {
  if (e.target === imageViewer) imageViewer.classList.add("hidden");
});

/* === NAVEGACIÓN DENTRO DEL VISOR === */
const viewerPrev = document.getElementById("viewer-prev");
const viewerNext = document.getElementById("viewer-next");

let currentProductIndex = null;
let currentSlideIndex = 0;

// Detectar qué producto y foto se amplía
document.addEventListener("click", e => {
  if (e.target.classList.contains("slide")) {
    const parentSlider = e.target.closest(".slider");
    if (!parentSlider) return;
    const id = parentSlider.id.split("-")[1];
    currentProductIndex = parseInt(id);
    const slides = parentSlider.querySelectorAll(".slide");
    currentSlideIndex = Array.from(slides).indexOf(e.target);
    viewerImg.src = e.target.src;
    imageViewer.classList.remove("hidden");
  }
});

// Cambiar imagen en el visor
function changeViewerImage(direction) {
  if (currentProductIndex === null) return;
  const slides = document.querySelectorAll(`#slider-${currentProductIndex} .slide`);
  currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
  viewerImg.src = slides[currentSlideIndex].src;
}

viewerPrev.addEventListener("click", e => {
  e.stopPropagation();
  changeViewerImage(-1);
});

viewerNext.addEventListener("click", e => {
  e.stopPropagation();
  changeViewerImage(1);
});

// Teclado (izquierda/derecha)
document.addEventListener("keydown", e => {
  if (imageViewer.classList.contains("hidden")) return;
  if (e.key === "ArrowLeft") changeViewerImage(-1);
  if (e.key === "ArrowRight") changeViewerImage(1);
  if (e.key === "Escape") imageViewer.classList.add("hidden");
});


/* === TOAST === */
function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => toast.classList.remove("show"), 2500);
  setTimeout(() => toast.remove(), 3000);
}

/* === INICIO === */
renderProducts();



