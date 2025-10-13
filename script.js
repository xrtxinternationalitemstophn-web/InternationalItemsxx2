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
  },
  {
    name: "Pecheras para Cámaras o Go Pro",
    price: 300.00,
    description: [
    "Captura tus aventuras con perspectiva real desde el pecho, ideal para ciclismo, motos, senderismo, deportes extremos y más.",
    "Arnés elástico, ajustable y ligero, se adapta perfectamente a cualquier tamaño y garantiza libertad de movimiento.",
    "Compatible con GoPro, cámaras deportivas, SJCam, Insta360 y similares. Incluye soporte y tornillo de montaje."
  ],
    images: [
      "images/pech1.jpg"
    ]
  },
  {
    name: "Cargador iPhone 20W Tipo C Carga Rápida",
    price: 140.00,
    description: [
    "Carga tu iPhone del 0% al 50% en solo 30 minutos gracias a la tecnología Power Delivery (PD).",
    "Fabricado con materiales de alta calidad, resistente al calor y compatible con todos los modelos de iPhone con entrada Lightning.",
    "Todo en un solo paquete, listo para usar en casa, la oficina o viajes."
  ],
    images: [
      "images/carg1.jpg",
      "images/carg2.jpg"
    ]
  },
  {
    name: "Mochila Ojos LED Multifuncional con Powerbank Incluida",
    price: 4000.00,
    description: [
    "Ojos LED controlables desde tu celular por app — ¡personaliza colores, efectos y animaciones únicas!",
    "Versión grande,para laptop u otros objetos personales. Ideal para motociclistas o viajes.",
    "Mantén tus luces LED y dispositivos siempre cargados donde vayas."
  ],
    images: [
      "images/mochi1.jpg",
      "images/mochi2.jpg",
      "images/mochi3.jpg",
      "images/mochi4.jpg",
      "images/mochi5.jpg"
    ]
  },
  {
    name: "Repetidor WiFi 300 Mbps",
    price: 300.00,
    description: [
    "Elimina las zonas sin señal y mejora la conexión en dormitorios, terrazas u oficinas.",
    "Transmite hasta 300 Mbps en 2.4 GHz, ideal para streaming, videollamadas y juegos online.",
    "Solo conéctalo y configúralo en minutos. Compatible con cualquier móvil, módem o router WiFi."
  ],
    images: [
      "images/rept1.jpg",
      "images/rept2.jpg",
      "images/rept3.jpg"
    ]
  },
  {
  name: "GPS Premium Magnetico Localizador Tiempo Real",
  price: 350.00,
  description: [
    "Rastrea vehículos, personas o mascotas desde tu celular con precisión en tiempo real.",
    "Se adhiere fácilmente a cualquier superficie metálica, ideal para autos, motos o equipaje.",
    "Alertas de movimiento, grabación de voz y batería de larga duración. Compatible con tarjeta SIM y app de seguimiento."
  ],
  images: [
    "images/gpsp1.jpg",
    "images/gpsp2.jpg",
    "images/gpsp3.jpg"
  ]
  },
  {
  name: "GPS Premium Guarda rutas, horas, Velocidad, Tiempo Real",
  price: 750.00,
  description: [
    "Localiza tu vehículo o persona en tiempo real y revisa historial de rutas, velocidad, hora y distancia recorrida.",
    "Rastreo estable y continuo con batería de larga duración y carga rápida por USB.",
    "Se adhiere fácilmente a cualquier superficie. Ideal para autos, motos, camiones o uso personal."
  ],
  images: [
    "images/gpsc1.jpg",
    "images/gpsc2.jpg",
    "images/gpsc3.jpg",
    "images/gpsc4.jpg"
  ]
},
  {
  name: "M90 Pro Auriculares con Pantalla de carga de cada auricular",
  price: 240.00,
  description: [
    "Muestra el nivel de batería de cada auricular y del estuche en tiempo real.",
    "Tecnología Bluetooth 5.3 con audio nítido, graves profundos y conexión sin cortes.",
    "Hasta 5 horas de uso continuo y más de 140 horas en modo standby con su estuche cargador."
  ],
  images: [
    "images/m901.jpg",
    "images/m902.jpg",
    "images/m903.jpg",
    "images/m904.jpg"
  ]
},
  {
  name: "Vidrio Templado para Nintendo Switch",
  price: 100.00,
  description: [
    "Vidrio templado ultra duro que protege tu pantalla contra golpes, caídas y rayones.",
    "Mantiene la calidad original de la imagen y el brillo de tu consola sin afectar la sensibilidad táctil.",
    "Sin burbujas, se ajusta perfectamente y es compatible con fundas y docks."
  ],
  images: [
    "images/nwv1.jpg"
  ]
},
  {
  name: "Hub Adaptador para 7 Puertos USB con Luz Led Corta Corriente",
  price: 220.00,
  description: [
    "Expande tu laptop o PC con 7 puertos USB para conectar mouse, teclado, memorias, impresoras y más.",
    "Cada puerto tiene su propio botón con luz LED — enciende o apaga sin desconectar tus dispositivos.",
    "Protección contra sobrecarga y cortocircuito. Disponible en color negro o blanco."
  ],
  images: [
    "images/hub1.jpg",
    "images/hub2.jpg",
    "images/hub3.jpg",
    "images/hub4.jpg",
    "images/hub5.jpg",
    "images/hub6.jpg"
  ]
},
  {
  name: "OFERTA ‼️Set Destornilladores Profesional para Celulares 115",
  price: 220.00,
  description: [
    "Incluye 115 piezas con puntas magnéticas y herramientas especiales para reparar celulares, consolas, laptops, relojes y más.",
    "Mango ergonómico, antideslizante y extensible para trabajos precisos y cómodos.",
    "Viene en estuche resistente, ideal para técnicos, aficionados o uso en casa."
  ],
  images: [
    "images/dest1.jpg",
    "images/dest2.jpg",
    "images/dest3.jpg"
  ]
},
{
  name: "Kit Go Pro 9/10/11/12 Funda Silicona y Vidrios Templados",
  price: 500.00,
  description: [
    "Protege tu cámara al máximo: Funda de silicona resistente a golpes, rayones y polvo.",
    "Vidrios templados incluidos: Pantalla y lente siempre seguros con protección anti-rayaduras y claridad total.",
    "Todo en un solo kit: Incluye tapa de lente, correa de mano, limpiadores y adhesivos antipolvo. Ideal para aventuras y uso diario"
  ],
  images: [
    "images/goa1.jpg",
    "images/goa2.jpg"
  ]
},
{
  name: "Carcasa Go Pro 8 Impermeable Contra el Agua",
  price: 400.00,
  description: [
    "Resiste hasta 45 metros de profundidad, ideal para buceo, surf, natación o lluvia intensa.",
    "Evita daños por agua, polvo o golpes sin afectar la calidad de video ni el audio.",
    "Ajuste perfecto para GoPro Hero 8 con cierre hermético y lente ultra transparente para capturas nítidas."
  ],
  images: [
    "images/cob1.jpg"
  ]
},
{
  name: "Carcasa Go Pro 9/10/11/12 Impermeable Contra el Agua",
  price: 550.00,
  description: [
    "Resistente hasta 45 m de profundidad, perfecta para buceo, surf, snorkel o lluvia intensa.",
    "Evita daños por agua, polvo y golpes sin afectar la claridad de imagen ni el rendimiento de tu cámara.",
    "Ajuste perfecto para modelos GoPro 9, 10, 11 y 12. Fabricada en material resistente con cierre hermético y lente transparente HD."
  ],
  images: [
    "images/carr1.jpg",
    "images/carr2.jpg",
    "images/carr3.jpg"
  ]
},
{
  name: "Intercomunicador Y20 para Casco PREMIUM Musica Llamadas",
  price: 700.00,
  description: [
    "Versión 2024 con Bluetooth 5.3: Conexión más estable, sonido estéreo HD y micrófono con cancelación de ruido.",
    "Escucha música, responde llamadas y comunícate con otros pilotos fácilmente mientras conduces.",
    "luces RGB: Hasta 16 modos de iluminación y batería de larga duración (hasta 25 h de uso y 300 h en espera)."
  ],
  images: [
    "images/y201.jpg",
    "images/y202.jpg",
    "images/y203.jpg"
  ]
},
{
  name: "Cargador de Bateria para Carro 12V",
  price: 360.00,
  description: [
    "Carga inteligente: Detecta el nivel de batería y ajusta la corriente automáticamente para una carga rápida y segura.",
    "Ideal para autos, motos, camionetas o baterías de 12V tipo plomo-ácido, AGM o gel.",
    "Diseño práctico: Indicadores LED de carga, Solo conéctalo y listo."
  ],
  images: [
    "images/cargg1.jpg",
    "images/cargg2.jpg",
    "images/cargg3.jpg",
    "images/cargg4.jpg",
    "images/cargg5.jpg"
  ]
},
{
  name: "Memoria USB 128GB con Musica",
  price: 250.00,
  description: [
    "Gran capacidad: 128GB de espacio para guardar miles de canciones, archivos, fotos o videos.",
    "Plug & Play: Solo conéctala a tu carro, bocina o computadora y disfruta de tu música favorita al instante",
    "Diseño giratorio y resistente: Cuerpo metálico con rotación 360°, compacta y duradera para uso diario."
  ],
  images: [
    "images/usbb1.jpg"
  ]
},





  
];

// === CONFIGURACIÓN ===
const FORMSPREE_URL = "https://formspree.io/f/xovkkovk";

// === FORMATEADOR DE MONEDA ===
const formatLempiras = amount =>
  new Intl.NumberFormat("es-HN", { style: "currency", currency: "HNL" }).format(amount);

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
      <p class="price">${formatLempiras(p.price)}</p>

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
  <p>${item.name} — ${formatLempiras(item.price)}</p>
  <button onclick="removeFromCart(${i})">❌</button>`;
    cartItems.appendChild(div);
  });
  cartTotal.textContent = formatLempiras(total);
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
  formData.append("total", formatLempiras(total));

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


















