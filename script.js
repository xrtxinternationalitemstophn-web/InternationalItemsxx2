/******************************************
 * 🔹 RAUDA SHOP - SCRIPT COMPLETO 🔹
 ******************************************/

// === LISTA DE PRODUCTOS ===
const products = [
  {
    name: "PowerBank 20,000 MaH",
    price: 160.00,
    categories: ["Tecnologia y Juegos", "Accesorios Varios"],  // 👈 Debe coincidir con CATEGORIES
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
    category: "Auto y Moto",
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
    category: "Tecnologia y Juegos",
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
    categories: ["Tecnologia y Juegos", "Seguridad Hogar"],
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
    categories: ["Tecnologia y Juegos", "Seguridad Hogar"],
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
    category: "Auto y Moto",
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
    category: "Tecnologia y Juegos",
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
    categories: ["Auto y Moto", "Tecnologia y Juegos"],
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
    categories: ["Tecnologia y Juegos", "Seguridad Hogar"],
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
  categories: ["Tecnologia y Juegos", "Seguridad Hogar"],
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
  categories: ["Tecnologia y Juegos", "Seguridad Hogar"],
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
  categories: ["Accesorios Varios", "Tecnologia y Juegos"],
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
  categories: ["Accesorios Varios", "Tecnologia y Juegos"],
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
  categories: ["Accesorios Varios", "Tecnologia y Juegos"],
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
  categories: ["Herramientas", "Tecnologia y Juegos"],
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
  categories: ["Accesorios Varios", "Tecnologia y Juegos"],
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
  categories: ["Accesorios Varios", "Tecnologia y Juegos"],
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
  categories: ["Accesorios Varios", "Tecnologia y Juegos"],
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
  categories: ["Auto y Moto", "Tecnologia y Juegos"],
  category: "Tecnologia y Juegos",
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
  categories: ["Tecnologia y Juegos", "Auto y Moto"],
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
  categories: ["Tecnologia y Juegos", "Auto y Moto"],
  description: [
    "Gran capacidad: 128GB de espacio para guardar miles de canciones, archivos, fotos o videos.",
    "Plug & Play: Solo conéctala a tu carro, bocina o computadora y disfruta de tu música favorita al instante",
    "Diseño giratorio y resistente: Cuerpo metálico con rotación 360°, compacta y duradera para uso diario."
  ],
  images: [
    "images/usbb1.jpg"
  ]
},
{
  name: "SanDisk Ultra Micro SD 128 GB con Adaptador y Lector USB",
  price: 650.00,
  categories: ["Tecnologia y Juegos", "Seguridad Hogar"],
  category: "Tecnologia y Juegos",
  description: [
    "Velocidades de lectura de hasta 100 MB/s para grabar, transferir o reproducir sin interrupciones.",
    "Ideal para celulares, cámaras, tablets, drones o consolas. Incluye adaptador SD y lector USB.",
    "SanDisk, líder mundial en almacenamiento, garantiza durabilidad y protección contra agua, golpes y rayos X."
  ],
  images: [
    "images/sand1.jpg",
    "images/sand2.jpg"
  ]
},
{
  name: "Mouse Logitech G502 Hero",
  price: 1400.00,
  category: "Tecnologia y Juegos",
  description: [
    "Precisión extrema con hasta 25,600 DPI y respuesta inmediata, ideal para gamers exigentes.",
    "11 botones programables: Personaliza tus comandos, macros y sensibilidad para cada juego o tarea.",
    "Diseño ergonómico y RGB Lightsync: Iluminación personalizable y pesos ajustables para un control total y comodidad prolongada."
  ],
  images: [
    "images/mouseg1.jpg",
    "images/mouseg2.jpg",
    "images/mouseg3.jpg",
    "images/mouseg4.jpg",
    "images/mouseg5.jpg",
    "images/mouseg6.jpg"
  ]
},
{
  name: "Kawasaki Ninja Moto a Escala 1:18 con Base Metal y Plástico",
  price: 400.00,
  categories: ["Juguetes", "Auto y Moto"],
  description: [
    "Réplica fiel de la legendaria Kawasaki Ninja, con acabados precisos en metal y plástico de alta calidad.",
    "Ideal para exhibir en vitrinas, escritorios o como regalo para amantes de las motos.",
    "Base sólida con placa decorativa para mantener la moto estable y lucirla con estilo."
  ],
  images: [
    "images/moto1.jpg",
    "images/moto2.jpg",
    "images/moto3.jpg",
    "images/moto4.jpg",
    "images/moto5.jpg",
    "images/moto6.jpg"
  ]
},
{
  name: "Pechera para Cámara y Celular",
  price: 480.00,
  categories: ["Tecnologia y Juegos", "Auto y Moto"],
  description: [
    "Captura tus recorridos en moto, bicicleta, caminatas o deportes con vista real desde el pecho.",
    "Adaptadores incluidos para cámaras de acción, GoPro y celulares de distintos tamaños.",
    "Arnés elástico, resistente y fácil de colocar, pensado para grabaciones estables y sin movimiento."
  ],
  images: [
    "images/pechera1.jpg",
    "images/pechera2.jpg",
    "images/pechera3.jpg",
    "images/pechera4.jpg",
    "images/pechera5.jpg"
  ]
},
{
  name: "Cargador Doble Controles PlayStation 5",
  price: 250.00,
  category: "Tecnologia y Juegos",
  description: [
    "Carga dos mandos a la vez: Diseñada para controles DualSense, permite recargar ambos al mismo tiempo en solo 3.5 a 4 horas.",
    "Conexión tipo C y LED indicador: Conector magnético preciso y luces que muestran el estado de carga de cada control.",
    ""
  ],
  images: [
    "images/ps51.jpg",
    "images/ps52.jpg",
    "images/ps53.jpg"
  ]
},
{
  name: "Handgrip Ejercitador INDESTRUCTIBLE APTO PARA FUERTES",
  price: 450.00,
  category: "Gimnasia y Deporte",
  description: [
    "Con 200 libras de tensión real, diseñado para quienes buscan potencia y agarre de nivel avanzado.",
    "Estructura 100% metálica con empuñaduras antideslizantes, hecha para durar toda la vida.",
    "Ideal para mejorar fuerza, antebrazos, muñecas y agarre en deportes o entrenamiento de alto rendimiento."
  ],
  images: [
    "images/hand1.jpg",
    "images/hand2.jpg",
    "images/hand3.jpg",
    "images/hand4.jpg"
  ]
},
{
  name: "Set Destornilladores 32 en 1 Portátil",
  price: 180.00,
  categories: ["Tecnologia y Juegos", "Herramientas"],
  description: [
    "Incluye 32 puntas magnéticas diferentes para reparar celulares, relojes, consolas, laptops y más.",
    "Mango ergonómico y antideslizante: Facilita el agarre y precisión en cada uso, ideal para trabajos delicados.",
    "Estuche resistente, ligero y fácil de transportar. Perfecto para técnicos o uso doméstico."
  ],
  images: [
    "images/des1.jpg",
    "images/des2.jpg",
    "images/des3.jpg",
    "images/des4.jpg",
    "images/des5.jpg"
  ]
},
{
  name: "Auriculares F9 Inalámbricos y Powerbank",
  price: 185.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Tecnología Bluetooth 5.1 con llamadas nítidas.",
    "Además de cargar los audífonos, funciona como powerbank para tu celular.",
    "Pantalla digital inteligente: Muestra el nivel de batería en tiempo real para que nunca te quedes sin energía."
  ],
  images: [
    "images/f91.jpg",
    "images/f92.jpg",
    "images/f93.jpg"
  ]
},
{
  name: "Microfono Inalambrico Doble para iPhone y Tipo C de Solapa",
  price: 300.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Compatibilidad universal: Incluye adaptadores para iPhone (Lightning) y Android (Tipo C).",
    "Sonido nítido y sin ruidos: Ideal para grabar videos, entrevistas, TikToks, reels o transmisiones en vivo.",
    "Conexión instantánea: Plug & Play sin apps ni configuraciones, con autonomía de hasta 8 horas continuas."
  ],
  images: [
    "images/solapa1.jpg"
  ]
},
{
  name: "Powerbank 200,000 MaH 100W iPhone/Android Cualquier Celular con Panel Solar",
  price: 1500.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Carga todos tus dispositivos: Compatible con Android, iPhone, tablets y más, salida de hasta 100W.",
    "Energía solar y digital display: Se recarga con el sol e incluye pantalla inteligente con porcentaje de carga.",
    "Ultra capacidad y resistencia: Perfecto para viajes, campamentos o emergencias — ¡olvídate de quedarte sin batería!"
  ],
  images: [
    "images/power1.jpg",
    "images/power2.jpg",
    "images/power3.jpg",
    "images/power4.jpg",
    "images/power5.jpg",
    "images/power6.jpg"
  ]
},
{
  name: "Disco SSD 960GB NUEVO SELLADO",
  price: 1800.00,
  category: "Tecnologia y Juegos",
  description: [
    "Hasta 10x más rápido que un disco duro tradicional: arranque, carga y transferencia en segundos.",
    "960GB para tus juegos, programas, archivos o sistema operativo.",
    "Nuevo y sellado de fábrica: garantía de calidad Kingston."
  ],
  images: [
    "images/king1.jpg",
    "images/king2.jpg",
    "images/king3.jpg"
  ]
},
{
  name: "Lego de Construcción de Accion Variedad",
  price: 400.00,
  categories: ["Juguetes", "Accesorios Varios"],
  description: [
    "Arma 6 modelos diferentes (carros, helicóptero y más) con las mismas piezas.",
    "Despierta la imaginación: Ideal para niños y niñas que aman construir y crear sus propias aventuras.",
    "Material resistente y colores vibrantes: Compatible con bloques tipo Lego."
  ],
  images: [
    "images/lego1.jpg",
    "images/lego2.jpg",
    "images/lego3.jpg",
    "images/lego4.jpg",
    "images/lego5.jpg",
    "images/lego6.jpg",
    "images/lego7.jpg",
    "images/lego8.jpg",
    "images/lego9.jpg",
    "images/lego10.jpg"
  ]
},
{
  name: "Intercomunicador Casco P10 2X para Parejas o Amigos",
  price: 1600.00,
  categories: ["Tecnologia y Juegos", "Auto y Moto"],
  description: [
    "Conexión doble Bluetooth 5.3: Permite hablar entre dos motociclistas o escuchar música y llamadas al mismo tiempo.",
    "Micrófono duro ideal para cascos cerrados o abiertos, con audio nítido incluso a alta velocidad.",
    "Batería de larga duración y luces LED RGB con estilo moderno. Incluye todo el kit de instalación (clips, cables y adhesivos)."
  ],
  images: [
    "images/p102x1.jpg",
    "images/p102x2.jpg",
    "images/p102x3.jpg",
    "images/p102x4.jpg",
    "images/p102x5.jpg",
    "images/p102x6.jpg"
  ]
},
{
  name: "Mouse Gaming Razer Deathadder Essential",
  price: 850.00,
  category: "Tecnologia y Juegos",
  description: [
    "Sensor óptico de 6400 DPI reales: precisión milimétrica para juegos de alto rendimiento.",
    "Diseño ergonómico clásico Razer, ideal para largas sesiones de juego sin fatiga.",
    "5 botones programables y construcción duradera con switches de alta calidad."
  ],
  images: [
    "images/razer1.jpg",
    "images/razer2.jpg",
    "images/razer3.jpg",
    "images/razer4.jpg"
  ]
},
{
  name: "Set Gorros Bebé 3 pzs 0-6 meses y 1-2 años",
  price: 320.00,
  categories: ["Ropa y Calzado", "Juguetes"],
  description: [
    "Incluye 3 gorros ideales para combinar con cualquier outfit.",
    "Material suave y elástico, perfecto para proteger la cabecita del bebé del frío.",
    "Disponible en tallas: 0–6 meses y 1–2 años."
  ],
  images: [
    "images/gorros1.jpg",
    "images/gorros2.jpg"
  ]
},
{
  name: "Monitor Gaming 240hz KTC Certificado 32”",
  price: 11000.00,
  category: "Tecnologia y Juegos",
  description: [
    "Pantalla curva FHD (1920×1080) con tecnología Fast HVA para colores más vivos y realismo total.",
    "Frecuencia ultra rápida de 240 Hz y 1 ms de respuesta, ideal para shooters y eSports.",
    "Compatibilidad HDR10 y cobertura de color 125% sRGB para una experiencia visual impresionante, con base estable y bordes delgados."
  ],
  images: [
    "images/monitor1.jpg",
    "images/monitor2.jpg",
    "images/monitor3.jpg",
    "images/monitor4.jpg",
    "images/monitor5.jpg",
    "images/monitor6.jpg"
  ]
},
{
  name: "Camara Exterior Wifi Gira 360",
  price: 400.00,
  categories: ["Tecnologia y Juegos", "Seguridad Hogar"],
  description: [
    "Rotación 360° y visión nocturna HD, vigila cada rincón de tu hogar día y noche.",
    "Control desde tu celular, habla y escucha en tiempo real con la app YI IOT.",
    "Resistente a lluvia y sol, perfecta para exteriores, fácil de instalar y conectar."
  ],
  images: [
    "images/camm1.jpg",
    "images/camm2.jpg"
  ]
},
{
  name: "Foco Camara Doble Lente Wifi Gira 360",
  price: 600.00,
  categories: ["Tecnologia y Juegos", "Seguridad Hogar"],
  description: [
    "Cobertura total 360°, doble lente inteligente que graba cada ángulo sin dejar puntos ciegos.",
    "Control desde tu celular, mira en vivo, escucha y habla en tiempo real desde la app.",
    "Instalación fácil tipo bombillo, se conecta directo al WiFi sin cables ni técnicos."
  ],
  images: [
    "images/focamm1.jpg",
    "images/focamm2.jpg",
    "images/focamm3.jpg",
    "images/focamm4.jpg"
  ]
},
{
  name: "Intercomunicador para Casco 7 Dias de Uso P10",
  price: 820.00,
  categories: ["Tecnologia y Juegos", "Auto y Moto"],
  description: [
    "Sonido claro y potente, habla con tu compañero o escucha música mientras conduces sin interrupciones.",
    "Bluetooth estable y multifunción, atiende llamadas, cambia canciones o activa el asistente de voz con un solo toque.",
    "Batería de larga duración, hasta 7 días de uso continuo, ideal para viajes largos y aventuras sobre dos ruedas."
  ],
  images: [
    "images/p10p1.jpg",
    "images/p10p2.jpg",
    "images/p10p3.jpg",
    "images/p10p4.jpg",
    "images/p10p5.jpg"
  ]
},
{
  name: "Accesorios Go Pro 50 en 1 4/5/6/7/8/9/10/11/12 Insta 360",
  price: 1650.00,
  categories: ["Tecnologia y Juegos", "Auto y Moto"],
  description: [
    "50 accesorios en un solo set, incluye estuche, soportes, correas, adaptadores, trípode y más para cualquier situación.",
    "Compatibilidad total, funciona con todas las versiones GoPro e Insta360, ideal para deporte, viaje o grabación profesional.",
    "Alta resistencia y calidad, materiales duraderos diseñados para soportar agua, impactos y largas jornadas de grabación."
  ],
  images: [
    "images/accesorios1.jpg",
    "images/accesorios2.jpg",
    "images/accesorios3.jpg",
    "images/accesorios4.jpg",
    "images/accesorios5.jpg",
    "images/accesorios6.jpg"
  ]
},
{
  name: "Kit Organizador Ropa Interior",
  price: 250.00,
  categories: ["Ropa y Calzado", "Accesorios Varios"],
  description: [
    "Orden inmediato, guarda ropa interior, calcetines y brasieres en compartimientos separados y visibles.",
    "Diseño elegante y transpirable, hecho con tela resistente y malla ventilada para mantener todo limpio y fresco.",
    "Ahorra espacio, ideal para cajones, closets o maletas — ¡adiós al desorden y al estrés al buscar tu ropa!"
  ],
  images: [
    "images/kit1.jpg",
    "images/kit2.jpg"
  ]
},
{
  name: "Drone E99 Pro Doble Camara",
  price: 700.00,
  categories: ["Tecnologia y Juegos", "Juguetes"],
  description: [
    "Doble cámara HD gran angular, graba y fotografía desde ángulos espectaculares con calidad profesional.",
    "Vuelo estable y fácil de controlar, gracias a su sensor de presión de aire, ideal para principiantes y expertos.",
    "Incluye batería recargable y estuche, todo lo que necesitas para disfrutar largas sesiones de vuelo y grabación."
  ],
  images: [
    "images/drone1.jpg",
    "images/drone2.jpg",
    "images/drone3.jpg",
    "images/drone4.jpg",
    "images/drone5.jpg"
  ]
},
{
  name: "Cargador de Bateria Carro 12V",
  price: 500.00,
  categories: ["Tecnologia y Juegos", "Auto y Moto"],
  description: [
    "Restaura y recarga tu batería fácilmente, con tecnología Smart Pulse Repair que recupera baterías dañadas o descargadas.",
    "Pantalla LCD inteligente, muestra voltaje, temperatura y modo de carga en tiempo real para un control total.",
    "Compatible con autos, motos y camiones, ideal para mantener tus vehículos siempre listos — compacto, potente y seguro."
  ],
  images: [
    "images/cargg1.jpg",
    "images/cargg2.jpg",
    "images/cargg3.jpg",
    "images/cargg4.jpg"
  ]
},
{
  name: "Mousepad RGB XXL Gaming",
  price: 450.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  category: "Tecnologia y Juegos",
  description: [
    "Tamaño gigante 80x30 cm, espacio perfecto para teclado y ratón, ideal para setups gaming o trabajo.",
    "Luces RGB multicolor, con varios modos de iluminación que puedes cambiar con un solo toque.",
    "Superficie antideslizante y suave, garantiza precisión, comodidad y estilo en cada partida."
  ],
  images: [
    "images/rgb1.jpg",
    "images/rgb2.jpg",
    "images/rgb3.jpg",
    "images/rgb4.jpg"
  ]
},
{
  name: "Camara Deportiva 4K Full Accesorios",
  price: 550.00,
  categories: ["Tecnologia y Juegos", "Auto y Moto"],
  category: "Tecnologia y Juegos",
  description: [
    "Ideal para capturar tus aventuras con una nitidez impresionante en cualquier entorno.",
    "Resistente al agua y a impactos, perfecta para moto, bicicleta, buceo o deportes extremos.",
    "Incluye kit completo de accesorios, soportes, cables y adaptadores para usarla donde quieras desde el primer día."
  ],
  images: [
    "images/gopro1.jpg",
    "images/gopro2.jpg",
    "images/gopro3.jpg"
  ]
},
{
  name: "Set Reloj para Regalo",
  price: 280.00,
  categories: ["Joyeria", "Damas"],
  description: [
    "Diseño elegante y brillante, incluye accesorios como lo ves, ideal para sorprender con estilo.",
    "Acabado premium, con detalles dorados y piedras decorativas que reflejan lujo y feminidad.",
    "Listo para regalar, perfecto para cumpleaños, aniversario o Día de la Madre."
  ],
  images: [
    "images/relog1.jpg"
  ]
},
{
  name: "Handgrip con Contador hasta 60kg",
  price: 250.00,
  categories: ["Gimnasia y Deporte", "Accesorios Varios"],
  description: [
    "Resistencia ajustable de 5 kg a 60 kg, ideal para todos los niveles: desde principiantes hasta atletas.",
    "Contador integrado, registra automáticamente cada repetición para medir tu progreso con precisión.",
    "Diseño ergonómico y antideslizante, cómodo y duradero para entrenamiento diario en casa, oficina o gimnasio."
  ],
  images: [
    "images/handg1.jpg",
    "images/handg2.jpg"
  ]
},
{
  name: "Powerbank 40,000 MaH OFERTA❗️",
  price: 700.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Carga solar y doble salida USB, ideal para mantener todos tus dispositivos con energía en cualquier lugar.",
    "Incluye linterna LED súper brillante, perfecta para viajes, emergencias o acampadas.",
    "Gran capacidad de 40,000 mAh, carga hasta 4 veces un celular promedio — confiable y duradero."
  ],
  images: [
    "images/powerr1.jpg",
    "images/powerr2.jpg",
    "images/powerr3.jpg",
    "images/powerr4.jpg"
  ]
},
{
  name: "Lapiz Para iPad Rechazo de Palma LIQUIDACION‼️",
  price: 320.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Rechazo de palma y alta precisión, escribe o dibuja naturalmente sin interrupciones ni marcas accidentales.",
    "Compatible con muchos modelos de iPad, incluyendo modelos Air, Pro y Mini (ver imagen para referencia).",
    "Carga rápida y larga duración, listo para usar en segundos y con batería de alto rendimiento."
  ],
  images: [
    "images/ipad1.jpg",
    "images/ipad2.jpg",
    "images/ipad3.jpg"
  ]
},
{
  name: "Lapiz Tactil Universal LIQUIDACIÓN‼️",
  price: 300.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Compatible con iOS, Android y Windows, úsalo en tablets, celulares y pantallas táctiles sin configuraciones.",
    "Respuesta inmediata y suave, ideal para escribir, dibujar o tomar notas con total precisión.",
    "Recargable y duradero, incluye cable USB tipo C para una carga rápida y autonomía prolongada."
  ],
  images: [
    "images/uni1.jpg",
    "images/uni2.jpg"
  ]
},
 {
  name: "Kit Grabacion Celular y Camara",
  price: 220.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Luz LED potente y regulable, perfecta para grabaciones nocturnas o en interiores con calidad profesional.",
    "Micrófono direccional de alta claridad, capta tu voz con nitidez y elimina ruidos externos.",
    "Trípode multifunción con control remoto, ideal para grabar vlogs, entrevistas o videos para redes."
  ],
  images: [
    "images/kig1.jpg"
  ]
},
 {
  name: "Samsung Tab S10 FE 128GB 1 AÑO DE GARANTIA NUEVA CON SU S-PEN NUEVA DE CAJA",
  price: 10200.00,
  categories: ["Tecnologia y Juegos", "Celulares y Tablets"],
  description: [
    "Rendimiento superior y fluido, ideal para trabajo, estudio y entretenimiento con su procesador optimizado.",
    "Incluye S-Pen original, perfecta para tomar notas, dibujar y trabajar con precisión profesional.",
    "Garantía de 1 año y totalmente nueva en caja, ofreciéndote seguridad, estilo y tecnología Samsung de última generación."
  ],
  images: [
    "images/tabs101.jpg",
    "images/tabs102.jpg",
    "images/tabs103.jpg"
  ]
},
{
  name: "Adaptador Sata para Disco Duro 2 en 1",
  price: 250.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Velocidad ultrarrápida USB 3.0, transfiere archivos grandes en segundos entre tu disco duro y PC o laptop.",
    "Compatible con HDD y SSD de 2.5”, ideal para respaldar, clonar o recuperar información fácilmente.",
    "Plug & Play sin instalación, con soporte OTG para celulares Android y televisores inteligentes."
  ],
  images: [
    "images/sata1.jpg",
    "images/sata2.jpg"
  ]
},
{
  name: "Intercomunicador Auricular para Casco Y10",
  price: 550.00,
  categories: ["Tecnologia y Juegos", "Auto y Moto"],
  description: [
    "Audio potente y claro, ideal para escuchar música, responder llamadas o usar GPS sin quitarte el casco.",
    "Conexión Bluetooth estable y de largo alcance, perfecta para motociclistas, ciclistas o aventureros.",
    "Batería de larga duración y diseño resistente al agua, listo para cualquier clima o trayecto."
  ],
  images: [
    "images/y101.jpg",
    "images/y102.jpg",
    "images/y103.jpg",
    "images/y104.jpg"
  ]
},
{
  name: "Camara Vigilancia Giratoria Wifi Exterior 360°",
  price: 400.00,
  categories: ["Tecnologia y Juegos", "Seguridad Hogar"],
  description: [
    "Conexión WiFi 2.4GHz estable y visión panorámica de 360°, controla cada rincón desde tu celular en tiempo real.",
    "Visión nocturna a color y detección inteligente de movimiento, recibe alertas instantáneas ante cualquier actividad sospechosa.",
    "Audio bidireccional y seguimiento automático, habla y escucha desde la app mientras la cámara sigue al intruso."
  ],
  images: [
    "images/ext1.jpg",
    "images/ext2.jpg",
    "images/ext3.jpg",
    "images/ext4.jpg"
  ]
},
{
  name: "Camara Giratoria Exterior Multiled 360°",
  price: 550.00,
  categories: ["Tecnologia y Juegos", "Seguridad Hogar"],
  description: [
    "Iluminación LED e infrarroja dual, ofrece imagen nítida tanto de día como de noche con visión a color.",
    "Conexión WiFi estable y control remoto, gira 360° y monitorea tu hogar desde tu celular estés donde estés.",
    "Detección inteligente de movimiento y audio bidireccional, recibe alertas en tiempo real y comunícate al instante."
  ],
  images: [
    "images/multiled1.jpg",
    "images/multiled2.jpg",
    "images/multiled3.jpg"
  ]
},
{
  name: "Helicoptero Control Remoto Recargable",
  price: 250.00,
  categories: ["Tecnologia y Juegos", "Juguetes"],
  description: [
    "Recargable por USB, olvídate de las pilas y disfruta de vuelos más largos y estables.",
    "Fácil de usar con control remoto y sensor infrarrojo, ideal para niños y adultos que aman volar.",
    "Diseño resistente de 18 cm, ligero, duradero y perfecto para interiores o exteriores."
  ],
  images: [
    "images/helicop1.jpg",
    "images/helicop2.jpg",
    "images/helicop3.jpg",
    "images/helicop4.jpg"
  ]
},
{
  name: "Mini Camara WiFi HD",
  price: 220.00,
  categories: ["Tecnologia y Juegos", "Seguridad Hogar"],
  description: [
    "Conexión WiFi en tiempo real, visualiza desde tu celular todo lo que ocurre en tu hogar u oficina estés donde estés.",
    "Calidad HD y visión nocturna automática, obtén imágenes claras incluso en la oscuridad.",
    "Compacta, recargable y fácil de instalar, ideal para usar como cámara de seguridad, niñera o vigilancia de mascotas."
  ],
  images: [
    "images/minia91.jpg",
    "images/minia92.jpg"
  ]
},
{
  name: "Carrito Plegable Metal Hasta 400 lbs",
  price: 1750.00,
  categories: ["Herramientas", "Seguridad Hogar"],
  description: [
    "Estructura metálica ultra resistente, soporta hasta 400 lbs ideal para carga pesada, herramientas, compras o actividades al aire libre.",
    "Ruedas todoterreno y manija ajustable, se adapta a cualquier superficie y altura para un manejo cómodo y estable.",
    "Diseño plegable y portátil, se guarda fácilmente en segundos ocupando el mínimo espacio."
  ],
  images: [
    "images/carrito1.jpg",
    "images/carrito2.jpg",
    "images/carrito3.jpg"
  ]
},
{
  name: "Mouse Inalambrico Económico",
  price: 140.00,
  category: "Tecnologia y Juegos",
  description: [
    "Conexión inalámbrica estable, sin cables molestos y con respuesta rápida ideal para trabajo o estudio.",
    "Bajo consumo de energía, compatible con baterías AAA (opciones con o sin incluidas).",
    "Diseño ergonómico y silencioso, se adapta a tu mano con un desplazamiento suave y sin ruido.",
    "L.140 – Solo mouse (sin baterías)",
    "L.170 – Mouse + 2 baterías AAA", 
    "L.190 – Mouse + 4 baterías AAA"
  ],
  images: [
    "images/mousee1.jpg",
    "images/mousee2.jpg"
  ]
},
{
  name: "Relojes para Dama Variedad Set",
  price: 250.00,
  categories: ["Damas", "Joyeria"],
  description: [
    "Diseños exclusivos y femeninos, con relojes decorados y accesorios que realzan cualquier estilo.",
    "Incluye los accesorios como lo ves, ideal para regalar o consentirte con un toque de lujo.",
    "Variedad de modelos y colores, elige tu favorito y combina elegancia con tendencia."
  ],
  images: [
    "images/relogg1.jpg",
    "images/relogg2.jpg",
    "images/relogg3.jpg"
  ]
},
{
  name: "Pulseras de Pareja",
  price: 200.00,
  categories: ["Caballeros", "Joyeria"],
  description: [
    "Diseño combinado blanco y negro, simboliza la conexión y el equilibrio perfecto entre ambos.",
    "Cuentas luminosas que brillan en la oscuridad, para que siempre estén conectados incluso a distancia.",
    "Material ajustable y resistente, ideal para uso diario y como regalo significativo para tu pareja."
  ],
  images: [
    "images/pulseraduo1.jpg",
    "images/pulseraduo2.jpg"
  ]
},
//INICIO FALTANTES CATEGORIAS
{
  name: "Vitaminas Capsulas para Cabello Vitaminas A-C-E Restaura y Sana SELLADAS",
  price: 280.00,
  description: [
    "Fórmula enriquecida con Aceites Naturales (Argán, Macadamia y Aguacate) que hidratan profundamente y reducen el frizz.",
    "Contiene Vitaminas A, C, E y Pro-Vitamina B5, esenciales para fortalecer el cabello y estimular su crecimiento.",
    "Repara el daño desde la raíz hasta las puntas, dejando tu cabello suave, saludable y con brillo natural."
  ],
  images: [
    "images/vit1.jpg",
    "images/vit2.jpg",
    "images/vit3.jpg",
    "images/vit4.jpg",
    "images/vit5.jpg",
    "images/vit6.jpg",
    "images/vit7.jpg"
  ]
},
{
  name: "Memoria Micro SD 2TB V30",
  price: 800.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Ideal para guardar miles de fotos, videos 4K, música y aplicaciones sin preocuparte por el espacio.",
    "Velocidad de lectura V30 / U3 / A1, perfecta para grabación fluida en cámaras, drones, celulares y consolas.",
    "Alta durabilidad y resistencia, diseñada con tecnología High Endurance para un rendimiento estable y prolongado."
  ],
  images: [
    "images/tb1.jpg",
    "images/tb2.jpg"
  ]
},
{
  name: "Carteras para Dama Variedad",
  price: 235.00,
  categories: ["Damas", "Bolsos y Carteras"],
  description: [
    "Diseños modernos y versátiles, ideales para combinar con cualquier outfit, desde casual hasta elegante.",
    "Materiales de calidad, con acabados suaves, cierres seguros y detalles metálicos o bordados según el modelo.",
    "Tamaño práctico y cómodo, perfecto para llevar celular, billetera, maquillaje y más con estilo.",
    "235 Lps cada una."
  ],
  images: [
    "images/cartt1.jpg",
    "images/cartt2.jpg",
    "images/cartt3.jpg",
    "images/cartt4.jpg",
    "images/cartt5.jpg",
    "images/cartt6.jpg",
    "images/cartt7.jpg",
    "images/cartt8.jpg",
    "images/cartt9.jpg"
  ]
},
{
  name: "Cartera Grande para Mujer Incluye Lazo",
  price: 450.00,
  categories: ["Damas", "Bolsos y Carteras"],
  description: [
    "Diseño sofisticado y femenino, con detalle de lazo desmontable que agrega un toque chic a cualquier look.",
    "Amplio espacio interior, ideal para guardar celular, billetera, maquillaje y accesorios personales.",
    "Material resistente y liviano, con acabado acolchado y costuras de alta calidad para uso diario."
  ],
  images: [
    "images/carrt1.jpg",
    "images/carrt2.jpg",
    "images/carrt3.jpg"
  ]
},
{
  name: "Esferas Navideñas Set de 50 Piezas Surtido",
  price: 300.00,
  category: "Accesorios Varios",
  description: [
    "Decoración completa para tu árbol, con una hermosa combinación de colores clásicos: rojo, verde, dorado y azul.",
    "Acabados variados (brillantes, mate y con glitter) para darle un toque elegante y festivo a cualquier espacio.",
    "Ligero y resistente, ideales para árboles grandes o pequeños, fáciles de colgar y reutilizables año tras año."
  ],
  images: [
    "images/pelot1.jpg"
  ]
},
{
  name: "Flores Pascuas Navideñas Decoraciones Navidad",
  price: 120.00,
  category: "Accesorios Varios",
  description: [
    "Hermoso diseño con detalles dorados, ideal para dar un toque elegante y festivo a tu árbol o guirnaldas.",
    "Tamaño perfecto (15 cm) para destacar entre las ramas y combinar con luces o esferas.",
    "Material resistente y duradero, con acabado suave tipo terciopelo y hojas doradas brillantes."
  ],
  images: [
    "images/pasc1.jpg",
    "images/pasc2.jpg",
    "images/pasc3.jpg",
    "images/pasc4.jpg",
    "images/pasc5.jpg"
  ]
},
{
  name: "Esferas Decoraciones Navideñas Arbol Navidad 101 Pzs",
  price: 600.00,
  category: "Accesorios Varios",
  description: [
    "Incluye estrella decorativa para coronar tu árbol y 100 esferas surtidas en tonos rojo, dorado y verde.",
    "Dale vida a tu árbol, ideal para decoraciones grandes o medianas con un estilo navideño clásico y elegante.",
    "Variedad de acabados: mate, brillantes y con glitter. Resistentes, ligeras y fáciles de colocar."
  ],
  images: [
    "images/esf1.jpg",
    "images/esf2.jpg",
    "images/esf3.jpg",
    "images/esf4.jpg",
    "images/esf5.jpg"
  ]
},
{
  name: "Control Inalambrico PS3/ PS4/ PC COMPLETAMENTE NUEVOS",
  price: 440.00,
  categories: ["Tecnologia y Juegos", "Celulares y Tables"],
  description: [
    "Conecta y juega sin cables — Compatible con PS3, PS4 y PC, con respuesta rápida y sin retrasos.",
    "Diseño ergonómico y preciso — Joysticks suaves, botones sensibles y vibración realista para una experiencia pro.",
    "Recargable y duradero — Batería de larga vida, panel táctil y luces LED integradas."
  ],
  images: [
    "images/contrr1.jpg",
    "images/contrr2.jpg",
    "images/contrr3.jpg",
    "images/contrr4.jpg"
  ]
},
{
  name: "Kit Accesorios Go Pro 4/5/6/7/8/9/10/11/12 27 en 1",
  price: 1300.00,
  categories: ["Accesorios Varios", "Tecnologia y Juegos"],
  description: [
    "Todo en uno para cualquier aventura — Soportes de pecho, cabeza, muñeca, bicicleta, trípode, flotador y más.",
    "Compatibilidad total — Funciona con todas las cámaras GoPro y deportivas (Hero 4/5/6/7/8/9/10/11/12).",
    "Listo para acción extrema — Material resistente, cómodo y fácil de transportar con su bolsa de viaje incluida."
  ],
  images: [
    "images/kittgg1.jpg"
  ]
},
{
  name: "Lapiz 2da Generacion para iPad Rechazo de Palma Carga Magnetica",
  price: 1000.00,
  categories: ["Accesorios Varios", "Tecnologia y Juegos"],
  description: [
    "Conexión instantánea y carga magnética — Se adhiere al iPad y se carga sin cables en solo 2 h para hasta 9 h de uso continuo.",
    "Escritura natural y precisa — Dibuja o escribe sin retrasos ni marcas por contacto de la mano (rechazo de palma).",
    "Compatible con iPad Pro, Air y Mini recientes — Ideal para clases, notas, diseño o dibujo digital."
  ],
  images: [
    "images/lapizz1.jpg",
    "images/lapizz2.jpg",
    "images/lapizz3.jpg",
    "images/lapizz4.jpg",
    "images/lapizz5.jpg"
  ]
},
{
  name: "Forro para Casco Conejo Tipo Peluche CALIDAD",
  price: 500.00,
  categories: ["Accesorios Varios", "Auto y Moto"],
  description: [
    "Diseño único y llamativo — Convierte tu casco en el centro de atención con su estilo divertido y suave al tacto.",
    "Material de alta calidad — Peluche grueso, resistente y cómodo, no se deforma ni se pela con el uso.",
    "Fácil de colocar y quitar — Se adapta a la mayoría de cascos sin afectar la visibilidad ni la ventilación."
  ],
  images: [
    "images/forror1.jpg",
    "images/forror2.jpg",
    "images/forror3.jpg"
  ]
},
{
  name: "Accesorios Go Pro Hero 9/10/11/12 63 en 1 INCLUYE VIDRIOS TEMPLADOS",
  price: 1800.00,
  categories: ["Accesorios Varios", "Tecnologia y Juegos"],
  description: [
    "Todo lo que necesitas en un solo kit — Incluye correas, soportes, trípodes, flotador, ventosa, filtros y más para cualquier tipo de grabación.",
    "Protección total — Incluye vidrios templados para cuidar la lente y pantalla de tu cámara en todo momento.",
    "Ideal para acción extrema — Perfecto para deportes, viajes, buceo, ciclismo o grabaciones profesionales."
  ],
  images: [
    "images/kitggp1.jpg"
  ]
},
{
  name: "ENVIO GRATIS MicroSD 512GB 200MB/s SanDisk Extreme Pro 4K UHD",
  price: 2500.00,
  categories: ["Accesorios Varios", "Tecnologia y Juegos"],
  description: [
    "Velocidad extrema de hasta 200MB/s — Ideal para grabar y transferir videos en 4K UHD sin interrupciones.",
    "Diseño resistente — Soporta agua, golpes, rayos X y temperaturas extremas.",
    "Perfecta para cámaras, drones y celulares — Incluye adaptador SD para mayor compatibilidad."
  ],
  images: [
    "images/sandddk1.jpg",
    "images/sandddk2.jpg"
  ]
},
{
  name: "Dron Premium K3 E99Pro 4K Doble Camara Luz Led con Estuche",
  price: 800.00,
  categories: ["Juguetes", "Tecnologia y Juegos"],
  description: [
    "Imágenes Ultra HD — Cámara doble de alta definición para capturar fotos y videos con máxima claridad.",
    "Luz LED integrada — Ideal para vuelos nocturnos o en baja luz, con un diseño moderno y plegable.",
    "Listo para llevar — Incluye estuche de transporte, batería recargable y accesorios completos para volar desde el primer día."
  ],
  images: [
    "images/dronnn1.jpg",
    "images/dronnn2.jpg",
    "images/dronnn3.jpg",
    "images/dronnn4.jpg",
    "images/dronnn5.jpg"
  ]
},
{
  name: "Ganchos para Maquillaje Sujeta Cabello SET 6 Piezas",
  price: 150.00,
  categories: ["Damas", "Accesorios Varios"],
  description: [
    "No deja marcas — Ideal para sujetar el cabello mientras te maquillas o haces skincare sin arruinar el peinado.",
    "Suaves y resistentes — Pinzas con acabado liso que evitan tirones y cuidan tu cabello.",
    "Práctico set de 6 piezas — Colores elegantes (negro, crema y rosa) perfectos para uso diario o profesional."
  ],
  images: [
    "images/gancc1.jpg",
    "images/gancc2.jpg",
    "images/gancc3.jpg"
  ]
},
{
  name: "Borlas/Puff para Maquillaje Suaves y Calidad",
  price: 25.00,
  categories: ["Damas", "Accesorios Varios"],
  description: [
    "Acabado profesional — Borlas ultra suaves ideales para aplicar polvos sueltos o compactos con un acabado aterciopelado.",
    "Diseño en forma de gota — Perfectas para zonas difíciles como nariz y ojos, logrando una aplicación uniforme.",
    "Set de 6 piezas (3 negras + 3 beige) — Reutilizables, lavables y con cinta elástica para mejor agarre y control.",
    "25 LPS Unidad / 200 LPS 10 unidades."
  ],
  images: [
    "images/borlas1.jpg",
    "images/borlas2.jpg"
  ]
},
{
  name: "Cubre Pezon Adhesivo Silicona 2 Figuras",
  price: 120.00,
  categories: ["Damas", "Accesorios Varios"],
  description: [
    "Comodidad y discreción total — Hechos de silicona suave, se adaptan perfectamente al cuerpo y no se marcan bajo la ropa.",
    "Autoadhesivos y reutilizables — Fáciles de colocar, no se deslizan y pueden usarse varias veces sin perder adherencia.",
    "Diseños elegantes — Incluye 2 figuras (redondo y flor) ideales para cualquier tipo de prenda o evento especial."
  ],
  images: [
    "images/pezz1.jpg",
    "images/pezz2.jpg",
    "images/pezz3.jpg",
    "images/pezz4.jpg"
  ]
},
{
  name: "Set Aretes Collar 3 piezas Delicados Joyeria Europea",
  price: 190.00,
  categories: ["Damas", "Joyeria"],
  description: [
    "Diseños elegantes y modernos — Cada set combina brillo y estilo europeo, perfectos para lucir con cualquier outfit.",
    "Alta calidad y acabado fino — Elaborados con materiales resistentes y detalles brillantes que no se opacan con el uso.",
    "Ideal para regalo o uso diario — Incluye collar y aretes con medidas perfectas para realzar tu look con un toque sofisticado."
  ],
  images: [
    "images/setr1.jpg",
    "images/setr2.jpg",
    "images/setr3.jpg",
    "images/setr4.jpg",
    "images/setr5.jpg"
  ]
},
{
  name: "Camara Web con Microfono 1080HD",
  price: 400.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Imagen nítida y clara — Resolución Full HD ideal para videollamadas, clases en línea, streaming o reuniones profesionales.",
    "Micrófono con reducción de ruido — Capta tu voz con excelente calidad, eliminando ruidos de fondo para una comunicación más natural.",
    "Fácil instalación Plug & Play — Conéctala por USB y úsala al instante sin necesidad de drivers; rotación 360° y ángulo ajustable."
  ],
  images: [
    "images/webc1.jpg",
    "images/webc2.jpg",
    "images/webc3.jpg"
  ]
},
{
  name: "Llave Yamaha en Blanco para Ybr/Genesis/Fz/Yzf/R1/R6/R6S/Xjr 1300",
  price: 200.00,
  categories: ["Auto y Moto", "Accesorios Varios"],
  description: [
    "Repuesto ideal y resistente — Llave en blanco lista para cortar según tu modelo Yamaha, fabricada en metal duradero.",
    "Compatibilidad amplia — Perfecta para YBR, FZ, Genesis, YZF-R1, R6, R6S, XJR1300 y más.",
    "Diseño original y elegante — Con mango ergonómico y acabado de calidad que mantiene el estilo Yamaha.",
    "1 llave x 200 lps / 2 llaves x 360 lps / 3 llaves x 450 lps"
  ],
  images: [
    "images/yamh1.jpg",
    "images/yamh2.jpg",
    "images/yamh3.jpg"
  ]
},
{
  name: "Llave Yamaha en Blanco R25/R3/Xmax/R125/200/250/MT01/SR400/FZ6R/FZ6N/MT03/R15",
  price: 200.00,
  categories: ["Auto y Moto", "Accesorios Varios"],
  description: [
    "Alta compatibilidad y precisión — Diseñada para adaptarse perfectamente a varios modelos Yamaha, lista para cortar según tu llave original.",
    "Material resistente y duradero — Fabricada en acero de alta calidad con mango firme para mayor seguridad y vida útil.",
    "Estilo original Yamaha — Diseño elegante con acabado metálico y el emblema distintivo, manteniendo el look profesional de tu moto.",
    "1 llave x 200 lps / 2 llaves x 360 lps / 3 llaves x 450 lps"
  ],
  images: [
    "images/yamhhh1.jpg",
    "images/yamhhh2.jpg",
    "images/yamhhh3.jpg"
  ]
},
{
  name: "Funda para Volante Set 3 Piezas Timon Carro 37-38cm",
  price: 300.00,
  categories: ["Auto y Moto", "Accesorios Varios"],
  description: [
    "Comodidad y agarre total — Material antideslizante que brinda control firme al conducir, incluso en trayectos largos.",
    "Protege y renueva tu interior — Mantiene el volante fresco en calor y cálido en frío, evitando desgaste y mejorando la estética del auto.",
    "Ajuste universal (37-38 cm) — Fácil de instalar, se adapta a la mayoría de los autos y viene con cubre palanca y freno a juego."
  ],
  images: [
    "images/fundd1.jpg",
    "images/fundd2.jpg",
    "images/fundd3.jpg"
  ]
},
{
  name: "Esponja Mágica Limpia de TODO",
  price: 10.00,
  categories: ["Seguridad Hogar", "Accesorios Varios"],
  description: [
    "Elimina manchas al instante — Ideal para paredes, cocina, baño, zapatos, autos y más. Solo añade agua, ¡sin químicos!",
    "Material duradero y reutilizable — Su textura de melamina borra grasa, tinta, rayones y suciedad sin esfuerzo.",
    "Segura y ecológica — No daña las superficies y se puede usar varias veces. ¡Resultados visibles en segundos!"
  ],
  images: [
    "images/espp1.jpg",
    "images/espp2.jpg",
    "images/espp3.jpg",
    "images/espp4.jpg",
    "images/espp5.jpg",
    "images/espp6.jpg"
  ]
},
{
  name: "GANGA‼️Cobertor TPU Nintendo Switch V1/V2 CONTRA RAYONES",
  price: 150.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Protección total — A prueba de rayones, salpicaduras y suciedad. Ideal para mantener tu consola como nueva.",
    "Diseño inteligente — Permite cargar sin quitar la funda y mantiene todos los puertos accesibles.",
    "Material premium TPU — Flexible, resistente a impactos y con acabado brillante que realza el color original de tu Switch."
  ],
  images: [
    "images/tpuu1.jpg",
    "images/tpuu2.jpg",
    "images/tpuu3.jpg",
    "images/tpuu4.jpg"
  ]
},
{
  name: "Dedales Gamer Por Mayor y Al Detalle",
  price: 30.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Reacción ultra rápida — Mejora tu precisión y evita resbalones gracias a su tejido conductivo sensible al tacto.",
    "Comodidad total — Suaves, elásticos y transpirables, ideales para largas sesiones de juego.",
    "Aumenta tu rendimiento — Perfectos para Free Fire, PUBG, COD Mobile y más."
  ],
  images: [
    "images/dedall1.jpg",
    "images/dedall2.jpg",
    "images/dedall3.jpg",
    "images/dedall4.jpg"
  ]
},
{
  name: "Gorros Suavecitos Calentitos para Bebé 1-2 años Set 3 piezas",
  price: 300.00,
  categories: ["Ropa y Calzado", "Juguetes"],
  description: [
    "Diseño tierno — Bordado con un adorable dinosaurio, ideal para bebés de 1 a 2 años.",
    "Material suave y cálido — Tejido delicado que protege la cabecita del frío sin irritar la piel.",
    "Colores encantadores — Rosado, gris y negro para combinar con cualquier atuendo."
  ],
  images: [
    "images/gorrrrr1.jpg"
  ]
},
{
  name: "Organizadores de Maleta para Viajes Set 6 Piezas VARIEDAD COLORES",
  price: 300.00,
  categories: ["Ropa y Calzado", "Bolsos y Carteras"],
  description: [
    "Ahorra espacio y mantén todo en orden — Separa tu ropa, calzado y accesorios fácilmente para viajes sin estrés.",
    "Material resistente y ligero — Fabricados con tela impermeable, ideales para proteger tus prendas.",
    "Variedad de colores elegantes — Perfectos para identificar tus pertenencias y viajar con estilo."
  ],
  images: [
    "images/organnn1.jpg",
    "images/organnn2.jpg"
  ]
},
{
  name: "Bolso Mensajero para Viajes",
  price: 360.00,
  categories: ["Ropa y Calzado", "Bolsos y Carteras"],
  description: [
    "Ideal para viajeros — Tamaño compacto pero espacioso (26×21×9 cm) con múltiples compartimentos y cierres de alta calidad.",
    "Diseño funcional y resistente — Perfecto para guardar pasaporte, celular, cartera, llaves y documentos.",
    "Uso versátil — Puedes llevarlo como bolso cruzado o al hombro, cómodo para viajes, trabajo o uso diario."
  ],
  images: [
    "images/bolmm1.jpg",
    "images/bolmm2.jpg"
  ]
},
{
  name: "Peluche Perrito San Valentin para Niño Rígido",
  price: 150.00,
  categories: ["Juguetes", "Accesorios Varios"],
  description: [
    "Perfecto para regalar — Ideal para expresar cariño en San Valentín o cualquier ocasión especial.",
    "Textura suave y resistente — Su cuerpo rígido mantiene la forma, mientras el peluche es agradable al tacto.",
    "Detalles encantadores — Con corazones bordados y frases como “Love” y “I Love You”, que lo hacen aún más tierno."
  ],
  images: [
    "images/pecl1.jpg",
    "images/pecl2.jpg"
  ]
},
{
  name: "Linterna Foco Recargable 4 modos 6 Leds",
  price: 200.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Potente y versátil — Con 6 focos LED y 4 modos de luz (alta, media, estroboscópica y lateral COB), ilumina cualquier espacio con gran intensidad.",
    "Recargable por USB — Incluye indicador de batería para monitorear el nivel de carga en tiempo real.",
    "Diseño resistente y ergonómico — Fabricada en material ABS de alta calidad, con agarre cómodo y tamaño ideal para camping, trabajo o emergencias."
  ],
  images: [
    "images/focoo1.jpg",
    "images/focoo2.jpg",
    "images/focoo3.jpg"
  ]
},
{
  name: "Camión con 10 carros de Cuerda",
  price: 500.00,
  categories: ["Juguetes", "Accesorios Varios"],
  description: [
    "Set completo — Incluye 1 camión de transporte de 3 niveles y 10 carros plasticos de colores diseño deportivo y de cuerda veloces.",
    "Diseño plegable y resistente — El camión mide 28 cm, fabricado en plástico duradero, ideal para niños curiosos y activos.",
    "Regalo perfecto — Ideal para esta Navidad o cumpleaños, promueve la imaginación y el juego creativo."
  ],
  images: [
    "images/camcar1.jpg",
    "images/camcar2.jpg"
  ]
},
{
  name: "Avión Pistola Lanzadora Dinámica",
  price: 250.00,
  categories: ["Juguetes", "Accesorios Varios"],
  description: [
    "Lanzamiento potente y preciso — Solo apunta, aprieta el gatillo y mira cómo el avión despega volando alto con fuerza.",
    "Material liviano y seguro — Fabricado en espuma resistente, ideal para niños, sin riesgo de golpes ni daños.",
    "Entretenimiento activo — Perfecto para jugar al aire libre, desarrollar coordinación y disfrutar en familia."
  ],
  images: [
    "images/pistolvu1.jpg",
    "images/pistolvu2.jpg",
    "images/pistolvu3.jpg",
    "images/pistolvu4.jpg"
  ]
},
{
  name: "Forro de Casco Peluche Santa Claus",
  price: 500.00,
  categories: ["Juguetes", "Auto y Moto"],
  description: [
    "Diseño festivo y divertido — Transforma tu casco en un casco navideño con gorro de Santa y nariz de reno.",
    "Material de peluche suave — Cálido, cómodo y fácil de colocar, no daña la pintura del casco.",
    "Ideal para motorizados navideños — Perfecto para desfiles, regalos o simplemente llevar el espíritu de Navidad en cada recorrido."
  ],
  images: [
    "images/clausc1.jpg",
    "images/clausc2.jpg"
  ]
},
{
  name: "RTX 3060 12GB GDDR6 ZOTAC GAMING",
  price: 9500.00,
  categories: ["Tecnologia y Juegos", "Celulares y Tablet"],
  description: [
    "Memoria: 12GB GDDR6 ultra rápida / Arquitectura NVIDIA Ampere: con núcleos RT y Tensor de última generación.",
    "Tecnología IceStorm 2.0: refrigeración avanzada y silenciosa / Freeze Tech: apaga los ventiladores cuando no hay carga.",
    "FireStorm Utility: personaliza rendimiento, velocidad y RGB. / Soporte Ray Tracing y DLSS: gráficos realistas y mejor rendimiento.",
    "Ideal para gamers y creadores que buscan potencia, estabilidad, alto rendimiento gráfico y edición profesional."
  ],
  images: [
    "images/zotac1.jpg",
    "images/zotac2.jpg",
    "images/zotac3.jpg"
  ]
},
{
  name: "Teclado y Mouse RGB Gaming Combo PROMO",
  price: 450.00,
  categories: ["Tecnologia y Juegos", "Juguetes"],
  description: [
    "Iluminación arcoíris profesional: luces LED personalizables con efecto brillante para sesiones de juego épicas.",
    "Teclado QWERTY de 104 teclas: diseño ergonómico, respuesta rápida y silenciosa, ideal para gamers o trabajo.",
    "Mouse de precisión: sensor óptico fluido con retroiluminación RGB para movimientos exactos y cómodos."
  ],
  images: [
    "images/combb1.jpg",
    "images/combb2.jpg",
    "images/combb3.jpg",
    "images/combb4.jpg",
    "images/combb5.jpg"
  ]
},
{
  name: "Memoria USB 2TB 3.0 Xiaomi + Adaptador Tipo C Incluido",
  price: 550.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Velocidad extrema USB 3.0: transfiere archivos grandes en segundos con conexión estable y rápida.",
    "Compatible con todo: úsala en computadoras, celulares, tablets o Smart TV gracias al adaptador Tipo C incluido.",
    "Diseño elegante y resistente: cuerpo metálico premium con anillo llavero, ideal para llevar tus datos con estilo y seguridad."
  ],
  images: [
    "images/usbx1.jpg"
  ]
},
{
  name: "Mesa Gaming Tipo L con Luz Led Facil Armado",
  price: 3800.00,
  categories: ["Tecnologia y Juegos", "Accesorios Varios"],
  description: [
    "Iluminación LED ambiental: transforma tu setup con luces RGB que realzan el ambiente gamer.",
    "Diseño en forma de L: aprovecha al máximo tu espacio para dos monitores, PC y accesorios.",
    "Armado rápido y estructura firme: materiales resistentes y superficie amplia tipo fibra de carbono."
  ],
  images: [
    "images/escrit1.jpg",
    "images/escrit2.jpg",
    "images/escrit3.jpg"
  ]
},
{
  name: "Bolso Grande Bandolera Calidad",
  price: 420.00,
  categories: ["Bolsos y Carteras", "Accesorios Varios"],
  description: [
    "Amplio y funcional: espacio ideal para tablet, documentos, billetera y más, perfecto para uso diario o viajes.",
    "Material premium: fabricado con lona reforzada y cremalleras metálicas duraderas.",
    "Estilo moderno y cómodo: correa ajustable, diseño elegante y bolsillos organizadores que te mantienen siempre preparado."
  ],
  images: [
    "images/bolpp1.jpg",
    "images/bolpp2.jpg"
  ]
},
{
  name: "Soporte Celular para Carro Retrovisor",
  price: 190.00,
  categories: ["Auto y Moto", "Accesorios Varios"],
  description: [
    "Vista perfecta en todo momento: su rotación de 360° te permite ajustar el ángulo ideal sin bloquear tu visión al conducir.",
    "Agarre firme y seguro: sistema de sujeción estable para mantener tu celular fijo incluso en caminos irregulares.",
    "Instalación fácil y adaptable: se ajusta a la mayoría de retrovisores, ideal para GPS, videollamadas o grabaciones."
  ],
  images: [
    "images/carra1.jpg",
    "images/carra2.jpg",
    "images/carra3.jpg"
  ]
},
{
  name: "Cosmetiquera de Viaje Plegable Práctica y Elegante",
  price: 280.00,
  categories: ["Bolsos y Carteras", "Accesorios Varios"],
  description: [
    "Organización total: múltiples compartimentos con cierre y malla transparente para tener todo a la vista y al alcance.",
    "Protege tus cosméticos y artículos personales de la manera mas ordenada y limpia.",
    "Diseño colgante y portátil: ideal para viajes, gimnasio o uso diario; se cuelga fácilmente y ocupa poco espacio."
  ],
  images: [
    "images/bolss1.jpg",
    "images/bolss2.jpg",
    "images/bolss3.jpg"
  ]
}



//ULTIMO PRODUCTO



  
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





// Sincronizar cantidad del carrito
function updateFloatingCartCount() {
  // 🔹 Contador exacto: suma las cantidades de todos los productos
  const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  // 🔹 Actualiza el numerito rojo
  floatingCartCount.textContent = totalQty;

  // 🔹 Animación pequeña al cambiar
  floatingCartCount.classList.add("bounce");
  setTimeout(() => floatingCartCount.classList.remove("bounce"), 300);
}





let cart = [];

/* === RENDERIZAR PRODUCTOS CON SLIDER === */
function renderProducts(list = products) {
  productList.innerHTML = "";
  list.forEach((p, i) => {
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
  const product = products[i];
  const existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.qty += 1; // 🔹 Incrementa cantidad
  } else {
    cart.push({ ...product, qty: 1 }); // 🔹 Nuevo producto con cantidad 1
  }

  updateCart();
  showToast("Producto agregado 🛒");
  bounceFloatingCart();
  updateFloatingCartCount(); // 🔹 fuerza actualización inmediata del contador flotante

}




function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <div class="cart-item-info">
        <p><strong>${item.name}</strong></p>
        <p class="price">${formatLempiras(item.price)} × ${item.qty}</p>
      </div>
      <div class="cart-item-actions">
        <button onclick="changeQty(${i}, -1)">−</button>
        <input type="number" min="1" value="${item.qty}" onchange="setQty(${i}, this.value)">
        <button onclick="changeQty(${i}, 1)">+</button>
        <button class="remove" onclick="removeFromCart(${i})">🗑️</button>
      </div>
    `;
    cartItems.appendChild(div);
  });

  // ✅ Actualiza total con formato hondureño
  cartTotal.textContent = formatLempiras(total);

  // 💫 Pequeño efecto visual
  cartTotal.classList.add("highlight");
  setTimeout(() => cartTotal.classList.remove("highlight"), 400);

  // 🔹 Actualizar contadores
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalQty;
  updateFloatingCartCount();
}



function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty < 1) cart[index].qty = 1;
  updateCart();
}

function setQty(index, value) {
  const val = parseInt(value);
  if (!isNaN(val) && val > 0) {
    cart[index].qty = val;
    updateCart();
  }
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

  // ✅ Validar manualmente todos los campos requeridos
  const requiredFields = checkoutForm.querySelectorAll("[required]");
  let allFilled = true;

  requiredFields.forEach(field => {
    const value = field.value.trim();
    if (!value) {
      field.style.border = "2px solid red";
      allFilled = false;
    } else {
      field.style.border = "1px solid #ccc";
    }
  });

  if (!allFilled) {
    showToast("⚠️ Por favor completa todos los campos obligatorios antes de enviar.");
    return;
  }

  // ✅ Calcular total con cantidades
  let total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  let pedido = cart.map(i => `- ${i.name}: ${formatLempiras(i.price)} × ${i.qty}`).join("\n");

  // ✅ Preparar datos para Formspree
  const formData = new FormData(checkoutForm);
  formData.append("pedido", pedido);
  formData.append("total", formatLempiras(total));
  formData.append("metodo_pago", checkoutForm.metodo_pago.value);

  try {
    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      showToast(`✅ Pedido enviado correctamente  
      ¡Gracias por tu compra!  
      📞 Pendiente de tu celular, te contactaremos pronto 😉`);
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


/* === TOAST (VERSIÓN MEJORADA CON TEXTO LARGO Y EMOJIS) === */
function showToast(message) {
  // Eliminar toast anterior si existe
  const oldToast = document.querySelector(".toast-msg");
  if (oldToast) oldToast.remove();

  // Crear nuevo contenedor
  const toast = document.createElement("div");
  toast.className = "toast-msg";

  // ✅ Usa innerHTML para soportar saltos de línea y emojis correctamente
  toast.innerHTML = message.replace(/\n/g, "<br>");

  // Agregar al body directamente
  document.body.appendChild(toast);

  // Animación de aparición
  setTimeout(() => toast.classList.add("show"), 10);

  // Desaparecer después de 3 segundos
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/************** 🔎 BUSCADOR – CÓDIGO NUEVO (no toca nada existente) **************/
const floatingSearch = document.getElementById("floating-search");
const searchModal = document.getElementById("search-modal");
const closeSearchModalBtn = document.getElementById("close-search-modal");
const fsInput = document.getElementById("fs-input");
const searchConfirm = document.getElementById("search-confirm");
const searchBanner = document.getElementById("search-banner");
const searchBannerText = document.getElementById("search-banner-text");
const clearSearchBtn = document.getElementById("clear-search");

/* Mostrar/ocultar el botón de la lupa con el scroll (igual que el carrito) */
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) floatingSearch.classList.remove("hidden");
  else floatingSearch.classList.add("hidden");
});

/* Drag seguro como el carrito */
let isDraggingSearch = false;
let dragStartSearch = { x: 0, y: 0 };
let offsetSearch = { x: 0, y: 0 };

floatingSearch.addEventListener("pointerdown", e => {
  floatingSearch.setPointerCapture(e.pointerId);
  isDraggingSearch = false;
  dragStartSearch = { x: e.clientX, y: e.clientY };
  const rect = floatingSearch.getBoundingClientRect();
  offsetSearch.x = e.clientX - rect.left;
  offsetSearch.y = e.clientY - rect.top;
});
floatingSearch.addEventListener("pointermove", e => {
  if (e.pressure === 0) return;
  const dx = Math.abs(e.clientX - dragStartSearch.x);
  const dy = Math.abs(e.clientY - dragStartSearch.y);
  if (dx > 5 || dy > 5) {
    isDraggingSearch = true;
    moveFloatingSearch(e.clientX, e.clientY);
  }
});
floatingSearch.addEventListener("pointerup", e => {
  floatingSearch.releasePointerCapture(e.pointerId);
  if (!isDraggingSearch) {
    e.preventDefault();
    openSearchModal();
  } else {
    isDraggingSearch = false;
  }
});
function moveFloatingSearch(x, y) {
  const w = floatingSearch.offsetWidth;
  const h = floatingSearch.offsetHeight;
  let nx = x - offsetSearch.x;
  let ny = y - offsetSearch.y;
  const maxX = window.innerWidth - w - 5;
  const maxY = window.innerHeight - h - 5;
  nx = Math.min(Math.max(nx, 5), maxX);
  ny = Math.min(Math.max(ny, 5), maxY);
  floatingSearch.style.left = `${nx}px`;
  floatingSearch.style.top = `${ny}px`;
  floatingSearch.style.right = "auto";
  floatingSearch.style.bottom = "auto";
}

/* Abrir / cerrar modal */
function openSearchModal() {
  searchModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  setTimeout(() => fsInput && fsInput.focus(), 50);
}
function closeSearchModal() {
  searchModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
  const sb = document.querySelector(".search-bar");
  if (sb) sb.classList.remove("shake");
}
if (closeSearchModalBtn) closeSearchModalBtn.addEventListener("click", closeSearchModal);
if (searchModal) {
  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) closeSearchModal();
  });
}

/* Normalización (quita acentos y pasa a minúsculas) */
const normalize = (str) => (str || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase();

/* --- Ajuste de similitud (0..1). Más bajo = MÁS resultados parecidos --- */
let SEARCH_THRESHOLD = 0.45; // Prueba 0.45 (más laxo). Si quieres aún más, usa 0.35

/* Levenshtein ratio normalizado */
function levenshtein(a, b) {
  const al = a.length, bl = b.length;
  if (al === 0) return bl;
  if (bl === 0) return al;
  const dp = new Array(bl + 1);
  for (let j = 0; j <= bl; j++) dp[j] = j;
  for (let i = 1; i <= al; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= bl; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(
        dp[j] + 1,         // borrado
        dp[j - 1] + 1,     // inserción
        prev + (a[i - 1] === b[j - 1] ? 0 : 1) // sustitución
      );
      prev = tmp;
    }
  }
  return dp[bl];
}
function similarity(a, b) {
  a = normalize(a);
  b = normalize(b);
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  const dist = levenshtein(a, b);
  return 1 - dist / maxLen; // 0..1 (1 = idéntico)
}

/* Coincidencia difusa: incluye match directo y “palabra a palabra” */
function fuzzyContains(text, query, threshold = SEARCH_THRESHOLD) {
  text = normalize(text);
  query = normalize(query);
  if (!query) return true;
  if (text.includes(query)) return true; // atajo rápido

  const tWords = text.split(/\s+/).filter(Boolean);
  const qWords = query.split(/\s+/).filter(Boolean);

  // si cualquier palabra del query se parece a cualquier palabra del texto
  for (const qw of qWords) {
    for (const tw of tWords) {
      if (similarity(tw, qw) >= threshold) return true;
    }
  }
  return false;
}


/* Filtrar por nombre, descripción o precio */
function filterProductsByQuery(q) {
  const digits = q.replace(/[^\d.]/g, ""); // para precio
  return products.filter(p => {
    const nameMatch = fuzzyContains(p.name, q);
    const descMatch = (p.description || []).some(d => fuzzyContains(d, q));
    const priceMatch =
      digits && (
        String(p.price).includes(digits) ||
        formatLempiras(p.price).toLowerCase().includes(q.toLowerCase())
      );
    return nameMatch || descMatch || priceMatch;
  });
}


/* Ejecutar búsqueda */
function performSearch() {
  const bar = document.querySelector(".search-bar");
  const q = (fsInput?.value || "").trim();
  if (!q) {
    // pequeña vibración si está vacío
    if (bar) {
      bar.classList.remove("shake");
      void bar.offsetWidth; // reflow para reiniciar anim
      bar.classList.add("shake");
    }
    return;
  }

  const filtered = filterProductsByQuery(q);

  // Renderiza SOLO lo encontrado y avisa
  renderProducts(filtered);
  showSearchBanner(q, filtered.length);

  // Cerrar modal y hacer scroll a productos
  closeSearchModal();
  const prodSection = document.getElementById("productos");
  if (prodSection) {
    const top = prodSection.offsetTop - 60;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

/* Banner “Mostrando X resultados...” con botón X para limpiar */
function showSearchBanner(q, count) {
  if (!searchBanner) return;
  searchBannerText.textContent = `Mostrando ${count} resultado${count === 1 ? "" : "s"} para “${q}”.`;
  searchBanner.classList.remove("hidden");
}
function clearSearch() {
  if (searchBanner) searchBanner.classList.add("hidden");
  if (fsInput) fsInput.value = "";
  renderProducts(); // ← vuelve a todos los productos
  const prodSection = document.getElementById("productos");
  if (prodSection) {
    const top = prodSection.offsetTop - 60;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
if (clearSearchBtn) clearSearchBtn.addEventListener("click", clearSearch);

/* Eventos del buscador */
if (floatingSearch) floatingSearch.addEventListener("click", openSearchModal);
if (searchConfirm) searchConfirm.addEventListener("click", performSearch);
if (fsInput) {
  fsInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      performSearch();
    }
  });
}

/************** 🏷️ CATEGORÍAS – CONFIG FIJA **************/

/* 1) EDITA AQUÍ tus categorías visibles en la barra */
const CATEGORIES = [
  "Todos",
  "Tecnologia y Juegos",
  "Joyeria",
  "Celulares y Tablets",
  "Ropa y Calzado",
  "Auto y Moto",
  "Gimnasia y Deporte",
  "Juguetes",
  "Bolsos y Carteras",
  "Seguridad Hogar",
  "Herramientas",
  "Accesorios Varios",
  "Damas",
  "Caballeros",
  "Otros"
];

/* Normaliza nombres con o sin acentos para que coincidan con CATEGORIES */
const canonicalMap = {
  "tecnologia y juegos": "Tecnologia y Juegos",
  "tecnología y juegos": "Tecnologia y Juegos",
  "joyeria": "Joyeria",
  "joyería": "Joyeria",
  "celulares y tablets": "Celulares y Tablets",
  "ropa y calzado": "Ropa y Calzado",
  "auto y moto": "Auto y Moto",
  "gimnasia y deporte": "Gimnasia y Deporte", 
  "juguetes": "Juguetes",
  "bolsos y carteras": "Bolsos y Carteras",
  "seguridad hogar": "Seguridad Hogar",
  "herramientas": "Herramientas",
  "accesorios varios": "Accesorios Varios",
  "damas": "Damas",
  "caballeros": "Caballeros",
  "otros": "Otros"
};
function canonicalCategory(val) {
  if (!val) return "Otros";
  const key = val.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();
  return canonicalMap[key] || val;
}

/* Lee la categoría de cada producto (acepta varias claves) */
// Ahora lee 1..N categorías y siempre devuelve un array
function getCategories(p) {
  const raw = p.categories ?? p.categorias ?? p.category ?? p.categoria ?? p.cat ?? "Otros";
  const arr = Array.isArray(raw) ? raw : String(raw).split(","); // permite "Damas, Caballeros"
  return arr
    .map(s => s && s.toString().trim())
    .filter(Boolean)
    .map(canonicalCategory);
}


/* Si hay productos sin categoría conocida, agregamos “Otros” al final */
function computeCategories() {
  const hasOtros = products.some(p => getCategories(p).includes("Otros"));
  return hasOtros && !CATEGORIES.includes("Otros")
    ? [...CATEGORIES, "Otros"]
    : CATEGORIES;
}

const categoryBar = document.getElementById("category-bar");
let activeCategory = "Todos"; // 👈 por defecto “Todos”

function renderCategoryBar() {
  if (!categoryBar) return;
  categoryBar.innerHTML = "";

  const cats = computeCategories();
  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (cat === activeCategory ? " active" : "");
    btn.textContent = cat;

    btn.addEventListener("click", () => {
      activeCategory = cat;
      [...categoryBar.querySelectorAll(".chip")].forEach(c => c.classList.remove("active"));
      btn.classList.add("active");

      if (cat === "Todos") {
        // si tienes buscador con banner, lo limpiamos si existe
        if (typeof clearSearch === "function") try { clearSearch(); } catch {}
        renderProducts();
      } else {
        const filtered = products.filter(p => getCategories(p).includes(cat));
        renderProducts(filtered);
        if (typeof showSearchBanner === "function") {
          try { showSearchBanner(`Categoría: ${cat}`, filtered.length); } catch {}
        }
      }

      const prodSection = document.getElementById("productos");
      if (prodSection) {
        window.scrollTo({ top: prodSection.offsetTop - 60, behavior: "smooth" });
      }
    });

    categoryBar.appendChild(btn);
  });
}

renderCategoryBar();

//VENDEDOR OTRO
// === Mostrar campo "Otro" si el usuario selecciona esa opción ===
const vendedorSelect = document.getElementById("vendedor_aten");
const vendedorOtroInput = document.getElementById("vendedor_otro");

vendedorSelect.addEventListener("change", () => {
  if (vendedorSelect.value === "Otro") {
    vendedorOtroInput.style.display = "block";
    vendedorOtroInput.setAttribute("required", "required"); // vuelve obligatorio
  } else {
    vendedorOtroInput.style.display = "none";
    vendedorOtroInput.removeAttribute("required");
    vendedorOtroInput.value = ""; // limpia si cambia de opción
  }
});


/* === INICIO === */
renderProducts();


/* === INICIO === */
renderProducts();




































