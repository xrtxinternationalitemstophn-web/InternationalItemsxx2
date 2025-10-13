/******************************************
 * 🔹 RAUDA SHOP - SCRIPT COMPLETO 🔹
 ******************************************/

// === CONFIG ===
const FORMSPREE_URL = "https://formspree.io/f/xovkkovk";

// === PRODUCTOS (ejemplo) ===
// ⬇️ Reemplaza este arreglo por tu lista grande si quieres.
const products = [
  {
    name: "Pasamontañas",
    price: 100.00,
    description: [
      "Tela elástica y transpirable.",
      "Ideal para motos, ciclismo y aire libre.",
      "Ligero y fácil de lavar."
    ],
    images: ["images/pasm1.jpg"]
  },
  {
    name: "PowerBank 20,000 mAh",
    price: 160.00,
    description: [
      "Carga 4–6 veces un teléfono.",
      "Pantalla con % de batería.",
      "Incluye linterna y cable."
    ],
    images: ["images/product1.jpg","images/product2.jpg"]
  }
];

// === FORMATO MONEDA (HNL) ===
const formatLempiras = amount =>
  new Intl.NumberFormat("es-HN", { style: "currency", currency: "HNL" }).format(amount);

// === ELEMENTOS GLOBALES ===
const productList   = document.getElementById("product-list");
const noResults     = document.getElementById("no-results");

const cartBtn       = document.getElementById("cart-btn");
const cartModal     = document.getElementById("cart-modal");
const checkoutModal = document.getElementById("checkout-modal");
const closeCart     = document.getElementById("close-cart");
const closeCheckout = document.getElementById("close-checkout");
const cartItems     = document.getElementById("cart-items");
const cartTotal     = document.getElementById("cart-total");
const cartCount     = document.getElementById("cart-count");
const checkoutForm  = document.getElementById("checkout-form");
const checkoutBtn   = document.getElementById("checkout-btn");

const floatingCart        = document.getElementById("floating-cart");
const floatingCartCount   = document.getElementById("floating-cart-count");
const floatingSearchBtn   = document.getElementById("floating-search");
const searchBar           = document.getElementById("search-bar");
const searchInput         = document.getElementById("floating-search-input");
const closeSearch         = document.getElementById("close-search");

// === LIGHTBOX ===
const imageViewer = document.getElementById("image-viewer");
const viewerImg   = document.getElementById("viewer-img");
const viewerPrev  = document.getElementById("viewer-prev");
const viewerNext  = document.getElementById("viewer-next");
const closeViewer = document.getElementById("close-viewer");

// === CARRITO ===
let cart = [];

// === RENDER DE PRODUCTOS ===
function renderProducts(list = products) {
  productList.innerHTML = "";
  list.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <div class="slider" id="slider-${i}">
        <div class="slides-container">
          ${p.images.map((img, idx) => `
            <img src="${img}" class="slide ${idx === 0 ? "active" : ""}" alt="${p.name}">
          `).join("")}
        </div>
        <button class="prev" data-index="${i}">❮</button>
        <button class="next" data-index="${i}">❯</button>
      </div>
      <h3>${p.name}</h3>
      <p class="price">${formatLempiras(p.price)}</p>
      <ul class="description">
        ${(p.description || []).map(d => `<li>⭐ ${d}</li>`).join("")}
      </ul>
      <button class="add-btn" data-add="${i}">Agregar al carrito</button>
    `;
    productList.appendChild(card);
  });
  initSliders(list);
}

// === SLIDER ===
let slideIndices = [];
let slideIntervals = [];

function initSliders(list = products){
  list.forEach((_, i) => {
    slideIndices[i] = 0;
    const prev = document.querySelector(`#slider-${i} .prev`);
    const next = document.querySelector(`#slider-${i} .next`);
    prev.style.display = "block"; next.style.display = "block";
    prev.addEventListener("click", () => changeSlide(i, -1));
    next.addEventListener("click", () => changeSlide(i, 1));
    clearInterval(slideIntervals[i]);
    slideIntervals[i] = setInterval(() => changeSlide(i, 1), 3000);
  });
}

function changeSlide(productIndex, direction){
  const slides = document.querySelectorAll(`#slider-${productIndex} .slide`);
  if (!slides.length) return;
  slides[slideIndices[productIndex]].classList.remove("active");
  slideIndices[productIndex] = (slideIndices[productIndex] + direction + slides.length) % slides.length;
  slides[slideIndices[productIndex]].classList.add("active");
}

// === AGREGAR AL CARRITO ===
document.addEventListener("click", e => {
  const addIdx = e.target.getAttribute("data-add");
  if (addIdx !== null) addToCart(parseInt(addIdx,10));
});

function addToCart(i){
  const product = products[i];
  const existing = cart.find(item => item.name === product.name);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });   // ✅ spread correcto
  updateCart();
  showToast("Producto agregado 🛒");
  bounceFloatingCart();
}

// === ACTUALIZAR CARRITO ===
function updateCart(){
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-item-info">
        <p><strong>${item.name}</strong></p>
        <p class="price">${formatLempiras(item.price)} × ${item.qty}</p>
      </div>
      <div class="cart-item-actions">
        <button data-qty="${i}" data-delta="-1">−</button>
        <input type="number" min="1" value="${item.qty}" data-set="${i}">
        <button data-qty="${i}" data-delta="1">+</button>
        <button class="remove" data-remove="${i}">🗑️</button>
      </div>
    `;
    cartItems.appendChild(div);
  });

  cartTotal.textContent = formatLempiras(total);
  cartTotal.classList.add("highlight");
  setTimeout(()=>cartTotal.classList.remove("highlight"), 400);

  const totalQty = cart.reduce((s, it) => s + it.qty, 0);
  cartCount.textContent = totalQty;
  updateFloatingCartCount();
}

// Controles de cantidad / eliminar
cartItems.addEventListener("click", e => {
  if (e.target.hasAttribute("data-qty")) {
    const i = +e.target.getAttribute("data-qty");
    const d = +e.target.getAttribute("data-delta");
    cart[i].qty += d;
    if (cart[i].qty < 1) cart[i].qty = 1;
    updateCart();
  }
  if (e.target.hasAttribute("data-remove")) {
    const i = +e.target.getAttribute("data-remove");
    cart.splice(i,1);
    updateCart();
  }
});
cartItems.addEventListener("change", e => {
  if (e.target.hasAttribute("data-set")) {
    const i = +e.target.getAttribute("data-set");
    const v = parseInt(e.target.value,10);
    if (!isNaN(v) && v > 0) cart[i].qty = v;
    updateCart();
  }
});

// === BOTÓN NAV CARRITO ===
cartBtn.addEventListener("click", () => {
  cartModal.classList.toggle("hidden");
  document.body.classList.toggle("modal-open");
});

closeCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
});

cartModal.addEventListener("click", e => {
  if (e.target === cartModal) {
    cartModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
});

// === CHECKOUT ===
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Tu carrito está vacío 🛒");
  } else {
    cartModal.classList.add("hidden");
    checkoutModal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }
});

closeCheckout.addEventListener("click", () => {
  checkoutModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
});

checkoutModal.addEventListener("click", e => {
  if (e.target === checkoutModal) {
    checkoutModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
});

// Mostrar input "día otro"
const diaSelect = document.getElementById("dia-select");
const diaOtro   = document.getElementById("dia-otro");
diaSelect.addEventListener("change", () => {
  if (diaSelect.value === "Otro") diaOtro.classList.remove("hidden");
  else { diaOtro.classList.add("hidden"); diaOtro.value = ""; }
});

// Envío a Formspree con validación
checkoutForm.addEventListener("submit", async e => {
  e.preventDefault();

  // Validación requerida
  const requiredFields = checkoutForm.querySelectorAll("[required]");
  let ok = true;
  requiredFields.forEach(f => {
    const val = (f.value || "").trim();
    if (!val) { f.style.border = "2px solid red"; ok = false; }
    else { f.style.border = "1px solid #d9dce3"; }
  });
  if (diaSelect.value === "Otro" && !diaOtro.value.trim()){
    diaOtro.style.border = "2px solid red"; ok = false;
  }
  if (!ok) { showToast("⚠️ Por favor completa todos los campos obligatorios."); return; }

  // Totales
  const total  = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const pedido = cart.map(i => `- ${i.name}: ${formatLempiras(i.price)} × ${i.qty}`).join("\n");

  const formData = new FormData(checkoutForm);
  formData.append("pedido", pedido);
  formData.append("total", formatLempiras(total));

  try {
    const res = await fetch(FORMSPREE_URL, { method:"POST", body:formData, headers:{Accept:"application/json"} });
    if (res.ok) {
      showToast(`✅ Pedido enviado correctamente\n¡Gracias por tu compra!\n📞 Te contactaremos pronto 😉`);
      checkoutForm.reset();
      cart = [];
      updateCart();
      checkoutModal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    } else {
      showToast("❌ Error al enviar el pedido.");
    }
  } catch {
    showToast("⚠️ Conexión fallida.");
  }
});

// === FLOTANTE CARRITO (drag + tap fiable) ===
let isDragging = false;
let dragStart = { x:0, y:0 };
let offset = { x:0, y:0 };

floatingCart.addEventListener("pointerdown", e => {
  floatingCart.setPointerCapture(e.pointerId);
  isDragging = false;
  dragStart = { x:e.clientX, y:e.clientY };
  const rect = floatingCart.getBoundingClientRect();
  offset.x = e.clientX - rect.left;
  offset.y = e.clientY - rect.top;
});
floatingCart.addEventListener("pointermove", e => {
  if (e.pressure === 0) return;
  const dx = Math.abs(e.clientX - dragStart.x);
  const dy = Math.abs(e.clientY - dragStart.y);
  if (dx > 5 || dy > 5) {
    isDragging = true;
    moveFloatingCart(e.clientX, e.clientY);
  }
});
floatingCart.addEventListener("pointerup", e => {
  floatingCart.releasePointerCapture(e.pointerId);
  if (!isDragging) openCartModal();
  isDragging = false;
});
function moveFloatingCart(x,y){
  const bw = floatingCart.offsetWidth, bh = floatingCart.offsetHeight;
  let nx = x - offset.x, ny = y - offset.y;
  const maxX = window.innerWidth - bw - 5, maxY = window.innerHeight - bh - 5;
  nx = Math.min(Math.max(nx,5), maxX); ny = Math.min(Math.max(ny,5), maxY);
  floatingCart.style.left = `${nx}px`; floatingCart.style.top = `${ny}px`;
  floatingCart.style.right = "auto"; floatingCart.style.bottom = "auto";
}
function openCartModal(){
  if (navigator.vibrate) navigator.vibrate(40);
  cartModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}
function bounceFloatingCart(){
  floatingCart.animate(
    [{transform:"scale(1)"},{transform:"scale(1.25)"},{transform:"scale(1)"}],
    {duration:400,easing:"ease-out"}
  );
}
function updateFloatingCartCount(){
  const totalQty = cart.reduce((s,i)=>s+i.qty,0);
  floatingCartCount.textContent = totalQty;
}

// Mostrar flotantes siempre (y también al hacer scroll si quieres)
window.addEventListener("load", () => {
  floatingCart.classList.remove("hidden");
  floatingSearchBtn.classList.remove("hidden");
});

// === BUSCADOR FLOTANTE ===
floatingSearchBtn.addEventListener("click", () => {
  searchBar.classList.add("show");
  searchBar.classList.remove("hidden");
  searchInput.value = "";
  searchInput.focus();
});
closeSearch.addEventListener("click", () => {
  searchBar.classList.remove("show");
  setTimeout(()=>searchBar.classList.add("hidden"), 250);
  noResults.classList.add("hidden");
  renderProducts();
});
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase().trim();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    (p.description || []).some(d => d.toLowerCase().includes(q))
  );
  renderProducts(filtered);
  if (!filtered.length) noResults.classList.remove("hidden");
  else noResults.classList.add("hidden");
});

// === LIGHTBOX ===
let currentProductIndex = null;
let currentSlideIndex = 0;

document.addEventListener("click", e => {
  if (e.target.classList.contains("slide")) {
    const slider = e.target.closest(".slider");
    const id = +slider.id.split("-")[1];
    currentProductIndex = id;
    const slides = slider.querySelectorAll(".slide");
    currentSlideIndex = Array.from(slides).indexOf(e.target);
    viewerImg.src = e.target.src;
    imageViewer.classList.remove("hidden");
  }
});
closeViewer.addEventListener("click", () => imageViewer.classList.add("hidden"));
imageViewer.addEventListener("click", e => { if (e.target === imageViewer) imageViewer.classList.add("hidden"); });

function changeViewer(direction){
  if (currentProductIndex === null) return;
  const slides = document.querySelectorAll(`#slider-${currentProductIndex} .slide`);
  currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
  viewerImg.src = slides[currentSlideIndex].src;
}
viewerPrev.addEventListener("click", e => { e.stopPropagation(); changeViewer(-1); });
viewerNext.addEventListener("click", e => { e.stopPropagation(); changeViewer(1); });
document.addEventListener("keydown", e => {
  if (imageViewer.classList.contains("hidden")) return;
  if (e.key === "ArrowLeft") changeViewer(-1);
  if (e.key === "ArrowRight") changeViewer(1);
  if (e.key === "Escape") imageViewer.classList.add("hidden");
});

// === TOAST ===
function showToast(message){
  const old = document.querySelector(".toast-msg"); if (old) old.remove();
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerHTML = (message || "").replace(/\n/g,"<br>");
  document.body.appendChild(toast);
  setTimeout(()=>toast.classList.add("show"), 10);
  setTimeout(()=>{ toast.classList.remove("show"); setTimeout(()=>toast.remove(),250); }, 3500);
}

// === INICIO ===
renderProducts();

// scroll-to del hero
document.addEventListener("click", e => {
  const t = e.target.closest(".scroll-to");
  if (!t) return;
  const sel = t.getAttribute("data-target");
  const el = document.querySelector(sel);
  if (el) el.scrollIntoView({behavior:"smooth"});
});
