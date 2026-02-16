// Product data with 10-line descriptions
const productsData = {
  1: {
    title: "Aceite Tupelí Extra Virgen x 250 cm3",
    image: "tupeli-250.png",
    description: [
      "Nuestro Aceite Tupelí Extra Virgen x 250 cm3 representa la excelencia en cada gota, cuidadosamente extraído de las aceitunas más selectas de nuestros olivares centenarios.",
      "El proceso de extracción en frío garantiza la conservación de todos los nutrientes y antioxidantes naturales que hacen único a este producto.",
      "Cada botella contiene el resultado de una cosecha manual realizada en el momento óptimo de maduración de las frutas.",
      "Su color verde intenso con reflejos dorados anticipa un sabor complejo y equilibrado que deleitará los paladares más exigentes.",
      "En nariz presenta notas de hierba fresca, tomate verde y un ligero toque de almendra que evocan los campos de olivos mediterráneos.",
      "En boca es untuoso y aterciopelado, con un amargo y picor perfectamente equilibrados que perduran en un final elegante.",
      "Ideal para aderezar ensaladas de hojas verdes, carpaccios de pescado o simplemente disfrutar con pan recién horneado.",
      "Su alta concentración de ácido oleico y polifenoles lo convierten en un aliado excepcional para la salud cardiovascular.",
      "Presentado en botellas de vidrio oscuro de 250 cm3 que preservan todas sus propiedades organolépticas durante el tiempo.",
      "Un producto gourmet que transformará cualquier plato sencillo en una experiencia culinaria memorable.",
    ],
  },
  2: {
    title: "Aceite La Nobleza Virgen x 250 cm3",
    image: "LaNobleza-250.png",
    description: [
      "El Aceite La Nobleza Virgen es el resultado de un proceso de prensado puramente mecánico, sin intervención de procesos químicos.",
      "Esta variedad destaca por su carácter noble y equilibrado, manteniendo la esencia natural de las aceitunas de nuestra finca.",
      "Se caracteriza por un aroma sutil a aceitunas maduras y hierba fresca, ideal para quienes buscan un sabor auténtico pero no invasivo.",
      "Su perfil de sabor es suave y amable en el paladar, lo que lo convierte en el aliado perfecto para la cocina diaria.",
      "Es excepcionalmente versátil, funcionando tanto en crudo para ensaladas como para realzar el sabor de guisos y preparaciones al horno.",
      "Gracias a su extracción artesanal, conserva una rica composición de ácidos grasos monoinsaturados beneficiosos para el corazón.",
      "Presenta un color dorado con matices verdosos que reflejan su pureza y origen natural en cada botella.",
      "La Nobleza representa la tradición olivarera en su estado más puro, premiando la paciencia y el respeto por los tiempos de la naturaleza.",
      "Su presentación en envase de 250 cm3 permite disfrutar de su frescura óptima, protegiendo sus propiedades del paso del tiempo.",
      "Un aceite de calidad virgen que no puede faltar en la mesa de quienes aprecian la honestidad de un producto bien elaborado.",
    ],
  },
  3: {
    title: "Aceite Tradicional",
    description: [
      "El Aceite Tradicional encapsula siglos de historia familiar, elaborado con la misma pasión y dedicación de nuestros antepasados.",
      "Esta receta centenaria ha permanecido inalterable desde 1890, cuando nuestro bisabado fundó la almazara familiar.",
      "Utilizamos variedades autóctonas de aceitunas que han resistido el paso del tiempo manteniendo su carácter único.",
      "El molino de piedra tradicional, preservado con esmero, confiere a este aceite una personalidad inconfundible.",
      "Su elaboración artesanal limita la producción a pequeños lotes que garantizan la máxima calidad en cada envase.",
      "En aroma descubrimos reminiscencias de frutos secos, plátano maduro y un característico fondo de madera noble.",
      "El sabor es redondo y aterciopelado, con una dulzura natural que contrasta suavemente con notas amargas elegantes.",
      "Es el compañero perfecto para platos de cuchara, guisos tradicionales y recetas que han alimentado familias durante generaciones.",
      "Conservamos métodos de prensado en frío que, aunque lentos, preservan la esencia auténtica de nuestra tierra.",
      "Al probarlo, se evoca la nostalgia de las cocinas de antaño donde el aceite era el alma de cada preparación.",
    ],
  },
  4: {
    title: "Aceite Reserva",
    description: [
      "La Aceite Reserva es nuestra joya de la corona, una edición limitada que solo se produce en años excepcionales de cosecha.",
      "Cada botella está numerada y firmada, convirtiéndose en un objeto de colección para los amantes del buen aceite.",
      "Seleccionamos exclusivamente aceitunas de nuestros olivos más veteranos, algunos con más de 200 años de historia.",
      "La producción se limita a mil litros anuales, haciendo de este producto una verdadera rareza en el mercado.",
      "Su complejidad aromática despliega capas de tomate seco, hierbas silvestres, trufa blanca y un sutil toque mineral.",
      "En boca es extraordinariamente denso y persistente, con una estructura que evoluciona durante varios minutos.",
      "El diseño del envase ha sido creado por artesanos vidrieros, convirtiendo cada botella en una pieza de arte única.",
      "Ideal para regalar en ocasiones especiales o para guardar como tesoro en la despensa de los verdaderos gourmets.",
      "Incluye certificado de autenticidad y notas de cata elaboradas por nuestro maestro de almazara.",
      "Es la expresión máxima de nuestro saber hacer, reservada para quienes aprecian los placeres más exclusivos de la vida.",
    ],
  },
  5: {
    title: "Aceite Aromático",
    description: [
      "El Aceite Aromático es una innovadora creación que fusiona nuestro mejor aceite con infusiones naturales de hierbas aromáticas.",
      "Cada variedad macera durante semanas con especias seleccionadas que aportan personalidad sin overpower el aceite base.",
      "Disponible en tres versiones: Romero y Tomillo, Albahaca y Limón, o Guindilla y Ajo, para todos los gustos.",
      "El proceso de maceración se realiza a temperatura controlada para preservar tanto el aceite como las hierbas.",
      "El resultado es un condimento versátil que aporta profundidad de sabor con solo unas gotas en cualquier preparación.",
      "Perfecto para marinar carnes, aromatizar pastas, realzar pizzas caseras o crear vinagretas memorables.",
      "Los aromas son intensos y frescos, transportando directamente a un jardín mediterráneo en pleno verano.",
      "Cada botella contiene ramitas visibles de las hierbas utilizadas, demostrando la autenticidad del producto.",
      "Un regalo ideal para entusiastas de la cocina que disfrutan experimentando con nuevos sabores.",
      "Transforma platos cotidianos en experiencias gastronómicas sorprendentes con mínimo esfuerzo.",
    ],
  },
  6: {
    title: "Aceite Suave",
    description: [
      "El Aceite Suave ha sido especialmente diseñado para quienes prefieren un sabor delicado sin renunciar a la calidad premium.",
      "Su elaboración combina aceitunas en diferentes estados de maduración para lograr un perfil organoléptico equilibrado y amable.",
      "Presenta un punto de humo elevado que lo hace ideal para todo tipo de cocciones, desde salteados hasta frituras.",
      "El sabor neutro no compite con los ingredientes del plato, realzándolos sutilmente desde el fondo.",
      "Es perfecto para repostería saludable, sustituyendo mantequilla en bizcochos y galletas con resultados excepcionales.",
      "Los niños lo aceptan fácilmente, convirtiéndose en una excelente forma de incorporar grasas saludables a su dieta.",
      "Su textura ligera no deja sensación grasienta en el paladar, facilitando su uso en múltiples preparaciones.",
      "Conserva todas las propiedades beneficiosas del aceite de oliva aunque su sabor sea más discreto.",
      "El envase práctico incluye dosificador que permite controlar perfectamente la cantidad utilizada.",
      "Es el aliado indispensable en cualquier cocina que valore la versatilidad sin sacrificar la salud.",
    ],
  },
  7: {
    title: "Aceite Intenso",
    description: [
      "El Aceite Intenso es para valientes, con un carácter fuerte y personal que marca la diferencia en cada plato.",
      "Utilizamos exclusivamente aceitunas recogidas en su momento de maduración más temprano, cuando los polifenoles están en su máximo esplendor.",
      "Su color verde profundo casi oscuro anticipa la intensidad de sabores que despliega al contacto con el paladar.",
      "El picor es pronunciado pero elegante, dejando una sensación cálida que perdura gratamente en la garganta.",
      "Las notas amargas de alcachofa y cardo son el sello distintivo de este aceite de carácter inconfundible.",
      "Es el compañero ideal para platos robustos: carnes rojas a la parrilla, legumbres de cuchara o quesos curados potentes.",
      "Unas gotas sobre una pizza recién salida del horno la elevan a categoría de obra maestra culinaria.",
      "Su alto contenido en antioxidantes naturales lo convierte en uno de los aceites más saludables del mercado.",
      "Recomendado para paladares experimentados que buscan emociones fuertes en cada experiencia gastronómica.",
      "Cada botella contiene la esencia concentrada de la fuerza y el carácter de nuestra tierra mediterránea.",
    ],
  },
  8: {
    title: "Aceite Delicado",
    description: [
      "El Aceite Delicado es poesía líquida, creado especialmente para realzar las preparaciones más sutiles y refinadas.",
      "Se obtiene de la segunda prensada de las aceitunas más suaves, logrando un perfil fluido y casi etéreo.",
      "Su dulzura natural lo hace perfecto para ensaladas de hojas tiernas donde debe brillar la frescura de los ingredientes.",
      "Es el aliado indispensable de los pescados blancos, mariscos y carpaccios que requieren un toque sutil.",
      "En nariz despliega aromas de manzana madura, plátano y flores blancas que anuncian su carácter delicado.",
      "En boca es sedoso y redondo, con una agradable untuosidad que envuelve sin agredir las papilas gustativas.",
      "Funciona maravillosamente como base para mayonesas ligeras o salsas holandesas de textura aterciopelada.",
      "Su presentación en botella de cristal transparente permite admirar su color dorado pálido y luminoso.",
      "Ideal para quienes se inician en el mundo del aceite de oliva y prefieren comenzar con perfiles suaves.",
      "Demuestra que la delicadeza puede coexistir con la excelencia, ofreciendo una experiencia gastronómica refinada.",
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

// Initialize: add staggered animation to product cards
productCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});
