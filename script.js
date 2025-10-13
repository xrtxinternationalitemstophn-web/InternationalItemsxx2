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
{
  name: "SanDisk Ultra Micro SD 128 GB con Adaptador y Lector USB",
  price: 650.00,
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
    "images/p102x6.jpg",
    "images/p102x7.jpg"
  ]
},
{
  name: "Mouse Gaming Razer Deathadder Essential",
  price: 850.00,
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
    "images/mousee2.jpg",
    "images/mousee3.jpg"
  ]
},
{
  name: "Relojes para Dama Variedad Set",
  price: 250.00,
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
];

/******************************************
 * 🔹 CONFIGURACIÓN Y UTILIDADES
 ******************************************/
const FORMSPREE_URL = "https://formspree.io/f/xovkkovk";

const formatLempiras = amount =>
  new Intl.NumberFormat("es-HN", { style: "currency", currency: "HNL" }).format(amount);

/******************************************
 * 🔹 REFERENCIAS DEL DOM
 ******************************************/
const productList   = document.getElementById("product-list");
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

/* === Buscador flotante (ids requeridos en el HTML) ===
   #floating-search  (botón 🔍)
   #fs-overlay       (overlay click=cerrar)
   #fs-panel         (contenedor del buscador)
   #fs-close         (botón X)
   #fs-input         (input de búsqueda)
   #fs-submit        (botón Buscar) → opcional, pero recomendado
   #fs-noresults     (mensaje “no hay resultados”)
*/
/* === 🔎 BUSCADOR FLOTANTE === */
const fsBtn       = document.getElementById("floating-search");
const fsOverlay   = document.getElementById("fs-overlay");
const fsPanel     = document.getElementById("fs-panel");
const fsClose     = document.getElementById("fs-close");
const fsInput     = document.getElementById("fs-input");
const fsSubmitBtn = document.getElementById("fs-do");
const fsNoResults = document.getElementById("fs-noresults");

// ✅ Mostrar el botón de búsqueda al cargar
window.addEventListener("load", () => {
  fsBtn?.classList.remove("hidden");
});

// === Abrir / cerrar buscador ===
function openSearch() {
  fsOverlay.classList.remove("hidden");
  fsPanel.classList.remove("hidden");
  setTimeout(() => fsInput.focus(), 50);
}
function closeSearch() {
  fsOverlay.classList.add("hidden");
  fsPanel.classList.add("hidden");
  fsInput.value = "";
  fsNoResults.classList.add("hidden");
  renderProducts(); // restaura todos los productos
}

// Eventos básicos
fsBtn.addEventListener("click", openSearch);
fsClose.addEventListener("click", closeSearch);
fsOverlay.addEventListener("click", closeSearch);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !fsPanel.classList.contains("hidden")) closeSearch();
});

// === Filtrar productos (nombre, descripción o precio) ===
function filterProducts(query) {
  const q = query.toLowerCase().trim();

  // Buscar coincidencias
  const filtered = products.filter(p => {
    const byName = p.name.toLowerCase().includes(q);
    const byDesc = (p.description || []).some(d => d.toLowerCase().includes(q));
    const byPrice = String(p.price).includes(q) || formatLempiras(p.price).toLowerCase().includes(q);
    return byName || byDesc || byPrice;
  });

  // Render resultados
  renderSearchResults(filtered);

  // Mostrar aviso si no hay resultados
  if (q && filtered.length === 0) fsNoResults.classList.remove("hidden");
  else fsNoResults.classList.add("hidden");
}

// Disparar al presionar “Buscar” o Enter
function handleSearchConfirm() {
  const q = fsInput.value.trim();
  if (!q) return;

  const filtered = products.filter(p => {
    const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // elimina acentos
    const queryNorm = normalize(q.toLowerCase());
    const nameMatch = normalize(p.name.toLowerCase()).includes(queryNorm);
    const descMatch = (p.description || []).some(d => normalize(d.toLowerCase()).includes(queryNorm));
    const priceMatch = String(p.price).includes(q) || formatLempiras(p.price).toLowerCase().includes(q.toLowerCase());
    return nameMatch || descMatch || priceMatch;
  });

  renderSearchResults(filtered);

  if (filtered.length > 0) {
  // ✅ cerrar buscador y mostrar resultados
  closeSearch();
  window.scrollTo({
    top: document.getElementById("productos").offsetTop - 80,
    behavior: "smooth"
  });
} else {
  // ❌ si no hay resultados, mostrar todos de nuevo
  fsNoResults.classList.remove("hidden");
  renderProducts();
  const floatingCart = document.getElementById("floating-cart");
  if (floatingCart) floatingCart.classList.remove("hidden");
}
}

// Click en Buscar
fsSubmitBtn.addEventListener("click", handleSearchConfirm);

// Enter en input
fsInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearchConfirm();
  }
});



// === Mostrar resultados filtrados ===
function renderSearchResults(list) {
  productList.innerHTML = "";

  list.forEach((p, i) => {
    const card = document.createElement("div");
    card.classList.add("product");

    card.innerHTML = `
      <div class="slider" id="slider-s-${i}">
        <div class="slides-container">
          ${p.images.map((img, idx) => `
            <img src="${img}" class="slide ${idx === 0 ? "active" : ""}" alt="${p.name}">
          `).join("")}
        </div>
        <button class="prev" data-index="s-${i}">❮</button>
        <button class="next" data-index="s-${i}">❯</button>
      </div>
      <h3>${p.name}</h3>
      <p class="price">${formatLempiras(p.price)}</p>
      <ul class="description">
        ${(p.description || []).map(d => `<li>⭐ ${d}</li>`).join("")}
      </ul>
      <button class="add-btn">Agregar al carrito</button>
    `;

    // ✅ Vincular correctamente el botón de agregar
    card.querySelector(".add-btn").addEventListener("click", () => {
      const realIndex = products.findIndex(x => x.name === p.name);
      addToCart(realIndex);
    });

    productList.appendChild(card);
  });

  rebindSearchSliders();
  // === Al cargar la página, mostrar productos y carrito flotante ===
window.addEventListener("load", () => {
  renderProducts();
  const floatingCart = document.getElementById("floating-cart");
  if (floatingCart) floatingCart.classList.remove("hidden");
});

}

// === Slider de los resultados ===
function rebindSearchSliders() {
  document.querySelectorAll(".slider .prev").forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-index");
      changeSearchSlide(id, -1);
    };
  });
  document.querySelectorAll(".slider .next").forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-index");
      changeSearchSlide(id, 1);
    };
  });
}

const searchSlideIndex = {};
function changeSearchSlide(id, dir) {
  const slides = document.querySelectorAll(`#slider-${id} .slide`);
  if (!slides.length) return;
  if (!(id in searchSlideIndex)) searchSlideIndex[id] = 0;
  slides[searchSlideIndex[id]].classList.remove("active");
  searchSlideIndex[id] = (searchSlideIndex[id] + dir + slides.length) % slides.length;
  slides[searchSlideIndex[id]].classList.add("active");
}


renderProducts();
updateCart(); // asegura contadores correctos al cargar





