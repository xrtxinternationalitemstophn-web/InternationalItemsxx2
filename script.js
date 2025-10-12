/******************************************
 * 🔹 RAUDA SHOP - SCRIPT COMPLETO 🔹
 ******************************************/

// === LISTA DE PRODUCTOS ===
const products = [
  {
    name: "PowerBank 20,000 MaH",
    price: 160.00,
     description: [
    "Carga tu teléfono hasta 4 – 6 veces sin preocuparte por quedarte sin energía. Ideal para viajes, trabajo o emergencias.",
    "Muestra el porcentaje exacto de batería, para que siempre sepas cuánta carga tienes disponible.",
    "Acabado elegante en colores pastel (rosa y celeste) con textura antideslizante. Incluye cable USB y linterna LED integrada."
  ],
    images: [
      "images/product1.jpg",
      "images/product2.jpg",
      "images/product3.jpg"
    ]
  },
  {
    name: "Pasamontañas",
    price: 100.00,
     description: [
    "Fabricado con tela elástica y transpirable que se ajusta perfectamente al rostro sin incomodar o rayar.",
    "Ideal para motos, ciclismo, deportes al aire libre o trabajos donde necesites cubrirte del sol, viento o polvo.",
    "Puede usarse como máscara completa, gorro o cuello térmico. Ligero, duradero y fácil de lavar."
  ],
    images: [
      "images/pasm1.jpg"
    ]
  },
  {
    name: "Proyector HD Portatil",
    price: 620.00,
    description: [
    "Disfruta tus películas, series o juegos con calidad HD y colores vivos, incluso en espacios con poca luz.",
    "Conecta tu PS4/PS5, Nintendo Switch, laptop, celular, USB o TV Stick fácilmente gracias a sus múltiples entradas (USB, AV, audio y más).",
    "Diseño portátil, ligero y fácil de transportar. Ideal para noches de cine, presentaciones o viajes."
  ],
    images: [
      "images/proy1.jpg",
      "images/proy2.jpg",
      "images/proy3.jpg"
    ]
  },
  {
    name: "Foco Camara Wifi Giratoria App YiIot",
    price: 240.00,
    description: [
    "Se enrosca como un foco común y se conecta al WiFi en minutos mediante la app Yi IOT.",
    "Cámara giratoria 360° con calidad Full HD, visión nocturna y detección de movimiento para no perder ningún detalle.",
    "Mira en vivo, graba y recibe alertas directamente desde tu smartphone, estés donde estés no importa que pais."
  ],
    images: [
      "images/focam1.jpg"
    ]
  },
  {
    name: "Camara Exterior Wifi Giratoria 360°",
    price: 550.00,
    description: [
    "Vigila tu casa, negocio o patio con visión Full HD, detección de movimiento y visión nocturna.",
    "Se controla desde tu celular por app, con audio bidireccional y alertas en tiempo real.",
    "Ideal para exterior, impermeable y con rotación de 360° para cubrir cada ángulo sin puntos ciegos."
  ],
    images: [
      "images/cam1.jpg",
      "images/cam2.jpg"
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

// === BOTÓN FLOTANTE (DRAG + TAP FIABLE EN TODOS LOS DISPOSITIVOS) ===
const floatingCart = document.getElementById("floating-cart");
let isDragging = false;
let dragStart = { x: 0, y: 0 };
let offset = { x: 0, y: 0 };

// Iniciar movimiento o detectar toque
floatingCart.addEventListener("pointerdown", e => {
  floatingCart.setPointerCapture(e.pointerId);
  isDragging = false;
  dragStart = { x: e.clientX, y: e.clientY };
  const rect = floatingCart.getBoundingClientRect();
  offset.x = e.clientX - rect.left;
  offset.y = e.clientY - rect.top;
});

// Detectar movimiento real
floatingCart.addEventListener("pointermove", e => {
  if (e.pressure === 0) return; // dedo levantado
  const dx = Math.abs(e.clientX - dragStart.x);
  const dy = Math.abs(e.clientY - dragStart.y);
  if (dx > 5 || dy > 5) {
    isDragging = true;
    moveFloatingCart(e.clientX, e.clientY);
  }
});

// Finalizar movimiento o toque
floatingCart.addEventListener("pointerup", e => {
  floatingCart.releasePointerCapture(e.pointerId);
  if (!isDragging) {
    e.preventDefault();
    openCartModal(); // 👉 tap corto = abrir carrito
  } else {
    isDragging = false;
  }
});

function moveFloatingCart(x, y) {
  const buttonWidth = floatingCart.offsetWidth;
  const buttonHeight = floatingCart.offsetHeight;
  let newX = x - offset.x;
  let newY = y - offset.y;

  // Limitar a bordes de pantalla
  const maxX = window.innerWidth - buttonWidth - 5;
  const maxY = window.innerHeight - buttonHeight - 5;
  newX = Math.min(Math.max(newX, 5), maxX);
  newY = Math.min(Math.max(newY, 5), maxY);

  floatingCart.style.left = `${newX}px`;
  floatingCart.style.top = `${newY}px`;
  floatingCart.style.right = "auto";
  floatingCart.style.bottom = "auto";
}

function openCartModal() {
  cartModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

// Mostrar/ocultar según scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) floatingCart.classList.remove("hidden");
  else floatingCart.classList.add("hidden");
});



const floatingCartCount = document.getElementById("floating-cart-count");

// Mostrar/ocultar según scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) floatingCart.classList.remove("hidden");
  else floatingCart.classList.add("hidden");
});

// 🔹 Abrir el carrito desde el botón flotante (funciona en PC y móviles)
["click", "touchend"].forEach(evt => {
  floatingCart.addEventListener(evt, e => {
    if (isDragging) return;
    e.preventDefault();
    e.stopPropagation();
    cartModal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  });
});



// Sincronizar cantidad del carrito
function updateFloatingCartCount() {
  floatingCartCount.textContent = cart.length;
}


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

      <ul class="description">
        ${(p.description || []).map(d => `<li>⭐ ${d}</li>`).join("")}
      </ul>

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

// 🔹 Animación de rebote cuando se agrega un producto
function bounceFloatingCart() {
  floatingCart.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.25)" },
      { transform: "scale(1)" }
    ],
    { duration: 400, easing: "ease-out" }
  );
}

function addToCart(i) {
  cart.push(products[i]);
  updateCart();
  showToast("Producto agregado 🛒");
  bounceFloatingCart(); // 🔹 rebote visual al agregar producto
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
  updateFloatingCartCount();
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


closeCheckout.addEventListener("click", () => {
  checkoutModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
});

// 🔹 Cerrar checkout tocando fuera del modal
checkoutModal.addEventListener("click", e => {
  if (e.target === checkoutModal) {
    checkoutModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
});

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Tu carrito está vacío 🛒");
  } else {
    cartModal.classList.add("hidden");
    checkoutModal.classList.remove("hidden");
    document.body.classList.add("modal-open"); // 🔹 agrega esto
  }
});

// === ABRIR CARRITO DESDE EL BOTÓN FLOTANTE (PC + MÓVILES) ===
// === ABRIR CARRITO DESDE EL BOTÓN FLOTANTE (PC + MÓVILES, SIN BUGS) ===
let touchStartTime = 0;

floatingCart.addEventListener("touchstart", () => {
  touchStartTime = Date.now();
});

floatingCart.addEventListener("touchend", e => {
  const touchDuration = Date.now() - touchStartTime;
  // Evitar activar si fue arrastre o toque muy largo
  if (isDragging || touchDuration > 250) return;
  e.preventDefault();
  openCartModal();
});

floatingCart.addEventListener("click", e => {
  if (isDragging) return;
  e.preventDefault();
  openCartModal();
});

function openCartModal() {
  if (navigator.vibrate) navigator.vibrate(40);
  cartModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}




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














