// Product data with 10-line descriptions
const productsData = {
  1: {
    title: "Aceite Tupelí Extra Virgen x 250 ml",
    image: "tupeli-250.png",
    description: [
      "El Aceite Tupelí es un orgullo de San Juan, originado en las fértiles tierras de la zona de 25 de Mayo.",
      "Esta marca nace de una tradición familiar que prioriza la excelencia en el cultivo de olivos bajo el sol andino.",
      "Utiliza principalmente variedades de aceituna Arauco y Arbequina, logrando un blend de sabor equilibrado y persistente.",
      "Su procedencia en el Valle del Tulum le otorga notas minerales únicas, gracias al riego con agua pura de deshielo.",
      "El cuidadoso proceso de extracción en frío permite que el aceite mantenga todas sus propiedades nutricionales y antioxidantes.",
      "Visualmente, se distingue por su tono verde intenso con destellos dorados, característico de frutos cosechados en su punto óptimo.",
      "En nariz, desprende aromas a pasto recién cortado y notas frutales que resaltan la frescura de su origen regional.",
      "Su perfil gustativo lo hace el compañero perfecto para quesos maduros, ensaladas gourmet o platos de pastas mediterráneas.",
      "El envase de vidrio oscuro de 250 cm3 garantiza la máxima protección contra la luz para conservar su integridad sensorial.",
      "Elegir Tupelí es asegurar la presencia de un producto premium de nuestra región en cada una de tus comidas diarias.",
    ],
  },
  2: {
    title: "Aceite La Nobleza Virgen x 250 ml",
    image: "LaNobleza-250.png",
    description: [
      "El Aceite Virgen La Nobleza es una propuesta clásica de San Juan, originada en las tierras productivas de 25 de Mayo.",
      "Esta línea de producción busca acercar la tradición olivarera regional a los consumidores que valoran la honestidad del sabor.",
      "Se elabora con una selección de aceitunas Arauco y Manzanilla, típicas del Valle del Tulum, que le brindan su carácter único.",
      "El método de obtención asegura un aceite virgen que preserva la frescura de los frutos recolectados en su punto justo de madurez.",
      "Visualmente, destaca por su tono amarillo dorado con reflejos tenues, ideal para realzar el aspecto visual de cualquier receta casera.",
      "Su perfil sensorial se caracteriza por notas suaves de oliva madura, siendo una opción equilibrada y amigable para el paladar familiar.",
      "Es reconocido por su gran versatilidad, funcionando perfectamente tanto en salteados rápidos como en aliños para ensaladas diarias.",
      "La calidad de su materia prima garantiza un aporte saludable de nutrientes esenciales para mantener una dieta equilibrada y natural.",
      "Se presenta en un envase PET de 250 cm³, un formato ligero y resistente que facilita su uso constante y seguro en la cocina.",
      "Elegir La Nobleza es apostar por un producto genuino de nuestra industria que equilibra calidad y practicidad en cada comida.",
    ],
  },
  3: {
    title: "Aceite Tradicional",
    description: [
      "Nuestra etiqueta Tradicional ha sido seleccionada para representar los sabores más clásicos y queridos de la cultura olivícola.",
      "Es un aceite que evoca la historia y las recetas familiares, elegido por su consistencia y su perfil aromático inconfundible.",
      "Destaca por sus notas de frutos secos y un dulce natural que lo hace apto para todo tipo de paladares, desde niños a expertos.",
      "En Olivery buscamos marcas que preserven métodos como el molino de piedra, y esta opción es el mejor ejemplo de esa herencia.",
      "Su sabor es redondo y aterciopelado, convirtiéndolo en el acompañante ideal para platos de legumbres y guisos clásicos.",
      "Es el aceite que recomendamos para quienes desean volver a las bases del sabor puro y reconfortante de la cocina de antaño.",
      "Cada partida que recibimos es testeada para asegurar que mantiene esa personalidad robusta que tanto valoran nuestros clientes.",
      "Se elabora en pequeños lotes, lo que nos permite ofrecer un producto siempre fresco y con una calidad controlada al detalle.",
      "Ideal para aderezar pan recién horneado o para crear una base sabrosa en cualquier sofrito tradicional.",
      "Un clásico de nuestra selección que nunca falla en aportar el alma necesaria a cada preparación culinaria.",
    ],
  },
  4: {
    title: "Aceite Reserva",
    description: [
      "El Aceite Reserva es nuestra joya de la corona, una etiqueta exclusiva que seleccionamos solo en temporadas de cosechas excepcionales.",
      "Representa la máxima expresión de la calidad que buscamos en Olivery, con botellas limitadas y numeradas para los más exigentes.",
      "Proviene de producciones limitadas de árboles centenarios, lo que confiere al aceite una densidad y complejidad únicas.",
      "Su abanico aromático incluye notas de tomate seco, hierbas silvestres y un sutil fondo mineral difícil de encontrar en otras marcas.",
      "Es un producto de culto en nuestra boutique, reservado para momentos especiales y maridajes de alta gama.",
      "Su envase ha sido diseñado con una estética premium que refleja la exclusividad del contenido, ideal para regalos corporativos.",
      "En boca es largo y persistente, evolucionando con el tiempo y dejando un recuerdo elegante que invita a seguir degustando.",
      "Recomendamos su uso exclusivamente en frío para no perder ni un ápice de su compleja estructura molecular y aromática.",
      "Incluye una nota de cata detallada elaborada por nuestros expertos, guiándote a través de todas sus facetas sensoriales.",
      "Una inversión en sabor y salud que sitúa a tu mesa en el escalafón más alto de la gastronomía mundial.",
    ],
  },
  5: {
    title: "Aceite Aromático",
    description: [
      "Nuestra línea de Aceites Aromáticos nace de la búsqueda de las mejores fusiones entre oliva premium y botánicos naturales.",
      "Seleccionamos marcas que utilicen solo ingredientes reales para sus infusiones, evitando cualquier tipo de aromatizante artificial.",
      "Disponibles en variedades como Romero y Tomillo, Albahaca y Limón o Ajo y Guindilla, cada uno con una personalidad definida.",
      "Son la herramienta definitiva en nuestra tienda para quienes desean transformar un plato simple en algo extraordinario con un solo gesto.",
      "EL proceso de maceración lenta que exigen estos aceites garantiza que el sabor se integre de manera profunda y elegante.",
      "Excelentes para marinar carnes rojas, aromatizar pizzas caseras o darle un giro creativo a tus ensaladas mediterráneas.",
      "En cada botella podrás apreciar los elementos naturales utilizados, asegurando la transparencia y calidad del producto.",
      "Son muy valorados en nuestra boutique como regalos originales para amigos y familiares que aman cocinar y experimentar.",
      "Su base de aceite de oliva virgen extra de alta calidad asegura que el aporte nutricional siga siendo el protagonista.",
      "Una explosión de frescura y creatividad que no puede faltar en la cocina de un verdadero entusiasta del buen comer.",
    ],
  },
  6: {
    title: "Aceite Suave",
    description: [
      "El Aceite Suave de nuestra selección es la respuesta perfecta para quienes priorizan la funcionalidad sin sacrificar la calidad.",
      "Elegimos esta marca por su balance extraordinario, permitiendo que el aceite sea un vehículo de cocción sin opacar el sabor del plato.",
      "Es ideal para la repostería fina, donde se busca la humedad y salud del aceite de oliva pero con una presencia aromática discreta.",
      "Presenta un alto punto de humo, lo que lo convierte en un aliado seguro para salteados y frituras gourmets en tu cocina.",
      "Su textura es ligera y fluida, evitando sensaciones pesadas en el paladar una vez terminada la comida.",
      "Es la opción preferida por familias con niños en nuestra tienda, ya que su sabor amable facilita su aceptación por los más pequeños.",
      "Aunque es más sutil en sabor, mantiene todos los ácidos grasos saludables que esperas de un aceite de oliva de primer nivel.",
      "Viene con un práctico dosificador que hemos testeado para asegurar un uso eficiente y preciso en cada preparación.",
      "Recomendado por nuestros expertos como el aceite 'base' que todo hogar debería tener para su operativa diaria.",
      "Versatilidad y pureza se unen para ofrecerte un producto confiable en cada paso de tus recetas cotidianas.",
    ],
  },
  7: {
    title: "Aceite Intenso",
    description: [
      "Para los paladares que buscan emociones fuertes, hemos seleccionado este Aceite Intenso de carácter indomable y robusto.",
      "Proveniente de cosechas tempranas donde el polifenol está en su pico máximo, ofreciendo un sabor potente y vivaz.",
      "Destaca por un amargor y picor elegantes que marcan el ritmo de cualquier plato al que se le añada.",
      "En nuestra tienda lo recomendamos especialmente para carnes rojas a la brasa, quesos curados o pastas con salsas de tomate potentes.",
      "Su color es un verde profundo que ya nos habla de su concentración y de la fuerza de la tierra de donde proviene.",
      "Es una marca elegida por su valentía en el perfil sensorial, ideal para quienes no temen que el aceite sea el protagonista.",
      "Sus notas de alcachofa y cardo proporcionan una profundidad de sabor que se aprecia mejor al terminar el plato.",
      "Es uno de los aceites más saludables de nuestra boutique debido a su altísima concentración de antioxidantes naturales.",
      "Una experiencia sensorial completa que desafía los sentidos y eleva el concepto del aceite de oliva a nivel de condimento estrella.",
      "Cada botella es testimonio de la potencia que puede alcanzar una aceituna cuando se selecciona con criterio de excelencia.",
    ],
  },
  8: {
    title: "Aceite Delicado",
    description: [
      "El Aceite Delicado es la opción más etérea y refinada de nuestra colección, seleccionado por su sutileza poética.",
      "Se obtiene de variedades que ofrecen un perfil fluido y luminoso, ideal para realzar ingredientes de sabores muy tenues.",
      "Es el compañero indispensable para pescados blancos, mariscos y todas aquellas preparaciones 'crudo' que requieren suavidad.",
      "En nariz ofrece notas de manzana y flores blancas, una fragancia elegante que anticipa su paso sedoso por la boca.",
      "Lo hemos incluido en Olivery para aquellos clientes que buscan una experiencia gastronómica de alta precisión y fineza.",
      "Su dulzura natural lo hace perfecto para equilibrar ensaladas con cítricos o para la confección de mayonesas clarificadas.",
      "Presentado en botellas de cristal de diseño que permiten apreciar su color dorado pálido, es una pieza de lujo en tu mesa.",
      "Incluso en su delicadeza, este aceite cumple con todos los estándares de excelencia y pureza que exigimos en nuestra boutique.",
      "Ideal para quienes se inician en la cata de aceites y prefieren perfiles menos agresivos pero igualmente complejos.",
      "Una caricia al paladar que demuestra que en la cocina, a veces, lo más sutil es lo que más impacto genera.",
    ],
  },
};

// DOM Elements
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");
const productCards = document.querySelectorAll(".product-card");

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll(".animate-on-scroll").forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(el);
});

// Product card click handlers
productCards.forEach((card) => {
  card.addEventListener("click", () => {
    const productId = card.getAttribute("data-product");
    const product = productsData[productId];

    if (product) {
      openModal(product);
    }
  });
});

// Open modal function
function openModal(product) {
  modalTitle.textContent = product.title;

  if (product.image) {
    modalImage.innerHTML = `<img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">`;
  } else {
    modalImage.innerHTML = `<span>${product.title}</span>`;
  }

  // Clear previous content
  modalDescription.innerHTML = "";

  // Add each line as a paragraph
  product.description.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    modalDescription.appendChild(p);
  });

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close modal function
function closeModalFunction() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Event listeners for closing modal
closeModal.addEventListener("click", closeModalFunction);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalFunction();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModalFunction();
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  if (hero && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
    heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
  }
});

// Add hover effect to benefit cards
const benefitCards = document.querySelectorAll(".benefit-card");
benefitCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// FAQ Accordion logic
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    // Optional: close other items before opening the current one
    faqItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

// Re-observe elements if needed (the general observer already handles .animate-on-scroll)

// Initialize: add staggered animation to product cards
productCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});
// Theme Toggle Logic
const themeToggle = document.getElementById("themeToggle");
const themeText = document.getElementById("themeText");
const body = document.body;

function updateThemeText(isDark) {
  themeText.textContent = isDark ? "MODO CLARO" : "MODO OSCURO";
}

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  const isDark = savedTheme === "dark";
  body.classList.toggle("dark-theme", isDark);
  updateThemeText(isDark);
}

themeToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeText(isDark);
});
