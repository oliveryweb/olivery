// Product data with 10-line descriptions
const productsData = {
  1: {
    title: "Aceite Tupelí Extra Virgen x 250 ml",
    image: "tupeli-250.png",
    price: 8900,
    description: [
      "Producido por GAMA S.R.L., empresa familiar fundada en 1949 por Julio Marún en San Juan, Argentina.",
      "Elaborado con aceitunas frescas seleccionadas de la ladera sureste del Cerro Villicum, en el corazón del Valle del Tulum.",
      "Este Aceite de Oliva Extra Virgen premium destaca por su equilibrio perfecto entre notas frutales y un toque herbáceo.",
      "Presenta aromas a aceituna madura con un perfil sensorial armonioso que refleja la herencia de más de 70 años.",
      "Su sabor posee un amargor y picor ligeros en grado medio, característicos de frutos procesados en su punto óptimo.",
      "Garantiza una bajísima acidez y una alta concentración de polifenoles naturales gracias a su cuidadosa extracción.",
      "Es el compañero ideal para ensaladas mediterráneas, quesos de pasta dura y para finalizar platos de carnes o pastas.",
      "La pureza de Tupelí es el resultado de un compromiso inquebrantable con la calidad y la trazabilidad en origen.",
      "Cada botella transporta la esencia del sol sanjuanino y la tradición de una de las marcas más emblemáticas de la región.",
      "Su Establecimiento cuenta con el Museo Don Julio, donde se preserva la historia viva de la olivicultura nacional.",
    ],
  },
  2: {
    title: "Aceite La Nobleza Virgen x 250 ml",
    image: "LaNobleza-250.png",
    price: 7000,
    description: [
      "El Aceite La Nobleza es una propuesta virgen de gran pureza, distribuida por Tupelí Agroalimentos en San Juan.",
      "Se distingue por ser un aceite profundamente sensorial, con una fragancia característica a aceituna madura.",
      "A diferencia de otros aceites más intensos, La Nobleza destaca por su ausencia de sensaciones de picor o amargor.",
      "Ofrece una experiencia en boca extremadamente suave, armoniosa y equilibrada, ideal para paladares delicados.",
      "Es un producto genuino de la región de San Juan, que captura la esencia del clima árido y el sol andino de la provincia.",
      "Su perfil 'frutado maduro' lo convierte en un ingrediente versátil para la cocina diaria y la mesa gourmet.",
      "Recomendado por expertos para enriquecer el sabor de ensaladas frescas, pizzas caseras y platos de pastas suaves.",
      "Su textura sedosa y sabor noble permiten potenciar los ingredientes originales del plato sin opacarlos.",
      "Es la elección predilecta de quienes buscan la salud del aceite de oliva con un toque suave y simplemente delicioso.",
      "Se presenta como un aceite honesto que lleva la tradición sanjuanina a los consumidores que valoran la fineza.",
    ],
  },
  3: {
    title: "Aceite Oliovita Mediterráneo Virgen Extra x 250 ml",
    image: "oliovita-mediterraneo.png",
    price: 6700,
    description: [
      "Producido por Solfrut en los valles de San Juan, líder en producción olivícola de alta gama en Argentina.",
      "El blend Mediterráneo es una creación exclusiva inspirada en el perfil sensorial de los aceites europeos clásicos.",
      "Se elabora a partir de una cuidosa selección de varietales que garantizan un sabor equilibrado y consistente.",
      "Destaca por su intensidad media, con fragancias que evocan el pasto recién cortado y sutiles notas de frutos maduros.",
      "En boca, logra una armonía perfecta entre una nota dulce inicial y un picor suave y persistente al final.",
      "Es un Aceite de Oliva Virgen Extra (AOVE) reconocido por su gran versatilidad en todo tipo de preparaciones.",
      "Ideal para realzar ensaladas, pastas mediterráneas, vegetales asados o simplemente para disfrutar con pan artesanal.",
      "La extracción se realiza por procesos mecánicos de última generación que conservan intactos sus polifenoles.",
      "Representa el compromiso de Solfrut con la excelencia, avalado por estándares internacionales de calidad y pureza.",
      "Su presentación de 250 ml es ideal para asegurar la frescura del producto en el uso cotidiano de cada mesa.",
    ],
  },
  4: {
    title: "Aceite Oliovita Clásico Virgen Extra x 250 ml",
    image: "oliovita-clasico.png",
    price: 7300,
    description: [
      "El Oliovita Clásico es el estándar de excelencia de Solfrut, producido en la provincia de San Juan, Argentina.",
      "Es un Aceite de Oliva Virgen Extra (AOVE) de tipo blend, diseñado para ofrecer un perfil de sabor constante y armonioso.",
      "Se caracteriza por su extrema suavidad y equilibrio, siendo una de las etiquetas más vendidas y respetadas del país.",
      "Posee un aroma frutado tenue con sutiles notas de olivas frescas, capturando la esencia de los valles precordilleranos.",
      "Su elaboración en la planta más moderna de América Latina asegura una bajísima acidez y máxima pureza.",
      "Es una fuente natural de vitaminas y antioxidantes, libre de grasas trans y procesos químicos refinados.",
      "Por su versatilidad, es el aliado ideal para el consumo diario en ensaladas, pastas, carnes blancas y salsas caseras.",
      "Su sabor noble permite que sea utilizado tanto para aderezar en crudo como para realizar cocciones ligeras.",
      "Cada botella de 250 ml en envase PET garantiza practicidad y protección de sus cualidades nutritivas fundamentales.",
      "Elegir Oliovita Clásico es llevar a la mesa la confianza de un líder regional que prioriza el bienestar y la salud.",
    ],
  },
  5: {
    title: "Aceite Laur Virgen Extra x 250 ml",
    image: "laur.png",
    price: 10900,
    description: [
      "Laur es la olivícola número 1 del mundo según el EVOO World Ranking por tres años consecutivos.",
      "Este Virgen Extra Clásico se produce en Maipú, Mendoza, continuando una tradición iniciada en 1889.",
      "Se elabora exclusivamente con aceitunas de la variedad Arbequina seleccionadas en su punto óptimo.",
      "Posee un aroma frutado verde intenso con notas a hierba recién cortada y un cuerpo estructurado.",
      "En boca presenta un amargor suave y el picor característico de los aceites ricos en antioxidantes naturales.",
      "Es un aceite de altísima gama, premiado internacionalmente por su pureza y perfil sensorial superior.",
      "Ideal para maridar con carnes rojas, pastas con salsas potentes o simplemente para degustar en crudo.",
      "El envase de vidrio de 250 ml protege la integridad del aceite de la luz y agentes externos.",
      "Incluye un pico dosificador antigoteo de precisión para un servicio elegante y sin desperdicios.",
      "Llevar un Laur a tu mesa es disfrutar del máximo exponente de la industria olivícola argentina global.",
    ],
  },
  6: {
    title: "Aceite Zuelo Virgen Extra Original x 250 ml",
    image: "zuelo-original.png",
    price: 11700,
    description: [
      "Zuelo es el proyecto olivícola de la prestigiosa Familia Zuccardi, con origen en Maipú, Mendoza.",
      "La versión Original es un blend equilibrado de variedades seleccionadas, como Arbequina, Picual y Coratina.",
      "Se caracteriza por su frescura excepcional, lograda mediante un proceso de extracción inmediata tras la cosecha.",
      "En nariz, destacan notas herbáceas intensas y una fragancia muy particular a banana verde y pasto fresco.",
      "Su perfil de sabor es frutado y sabroso, con un amargor medio y un regusto picante sumamente agradable.",
      "Es un aceite de gran personalidad que refleja fielmente el terruño mendocino y la pasión de la familia.",
      "Ideal para aderezar ensaladas de hojas amargas, pastas con vegetales o para finalizar carnes a la parrilla.",
      "El envase de vidrio de 250 ml preserva la complejidad aromática y protege el aceite de la oxidación.",
      "Viene equipado con un pico dosificador de alta precisión para un servicio grueso y un control total del goteo.",
      "Zuelo Original es garantía de un aceite virgen extra de clase mundial, nacido de la excelencia vitivinícola.",
    ],
  },
  7: {
    title: "Aceto Balsámico Oliovita Reducción x 250 ml",
    image: "oliovita.png",
    price: 4800,
    description: [
      "El Aceto Balsámico Oliovita Reducción es un aderezo premium elaborado por Solfrut en San Juan.",
      "Se caracteriza por su textura espesa y untuosa, lograda mediante un proceso de reducción lenta.",
      "Ofrece un equilibrio perfecto entre la acidez del vinagre de vino y la dulzura del mosto de uva concentrado.",
      "Su sabor es intenso y frutado, con el toque clásico de los acetos de estilo europeo más prestigiosos.",
      "Es el ingrediente ideal para decorar platos gourmet y aportar un contraste de sabor único y sofisticado.",
      "Excelente para maridar con quesos duros, carnes rojas a la parrilla, vegetales asados o incluso postres.",
      "Su consistencia cremosa permite realizar dibujos y terminaciones profesionales en cada una de tus recetas.",
      "El envase de vidrio de 250 ml asegura la conservación óptima de sus propiedades organolépticas superiores.",
      "Cuenta con un pico dosificador de precisión que facilita un servicio limpio y un control exacto del goteo.",
      "Una pieza indispensable en la cocina de quienes buscan elevar el nivel visual y gustativo de sus platos.",
    ],
  },
  8: {
    title: "Aceto Balsámico Clásico Casalta x 400 ml",
    image: "casalta.png",
    price: 4800,
    description: [
      "Casalta es la marca líder de Porta Hermanos, empresa cordobesa con más de 140 años de historia.",
      "Este Aceto Balsámico Clásico destaca por su acidez intensa y equilibrada, al estilo de Modena.",
      "Se elabora mediante una receta tradicional que combina vinagres seleccionados y mosto de uva.",
      "En nariz, ofrece notas frutales dulces que delatan la calidad de su materia prima de origen.",
      "Su sabor envuelve el paladar con una mezcla armoniosa de notas agrias y un final dulce persistente.",
      "Es el aliado perfecto para realzar el sabor de ensaladas diarias, vegetales asados y marinados.",
      "Su versatilidad permite utilizarlo también en recetas de carnes blancas e incluso en coctelería.",
      "La presentación en botella de vidrio de 400 ml garantiza una larga vida útil y frescura del producto.",
      "Incluye el práctico pico dosificador que permite un servicio preciso y evita derrames accidentales.",
      "Un clásico indispensable en los hogares argentinos que valoran la tradición industrial y el buen sabor.",
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

// Modal structure creation if not exists (defensive)
if (!modal && !document.getElementById("productModal")) {
  const modalHTML = `
    <div class="modal" id="productModal" aria-hidden="true" role="dialog">
      <div class="modal-content">
        <span class="close-modal" aria-label="Cerrar modal">&times;</span>
        <div class="modal-body">
          <div class="modal-image" id="modalImage"></div>
          <div class="modal-text">
            <h2 id="modalTitle"></h2>
            <div class="modal-description" id="modalDescription"></div>
          </div>
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

// Re-fetch elements after potential creation
const activeModal = document.getElementById("productModal");
const activeClose = document.querySelector(".close-modal");

// Open modal function
function openModal(product) {
  const mTitle = document.getElementById("modalTitle");
  const mDesc = document.getElementById("modalDescription");
  const mImg = document.getElementById("modalImage");

  mTitle.textContent = product.title;
  mImg.innerHTML = product.image
    ? `<img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: contain;">`
    : `<div class="image-placeholder"><span>${product.title}</span></div>`;

  mDesc.innerHTML = "";
  product.description.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    mDesc.appendChild(p);
  });

  activeModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// === CHECKOUT FLOW ===
let currentCheckoutProduct = null;

function openCheckout(productId) {
  const product = productsData[productId];
  if (!product) return;

  currentCheckoutProduct = { ...product, id: productId };

  const checkoutModal = document.getElementById("checkoutModal");
  const checkoutTitle = document.getElementById("checkoutProductTitle");
  const qtyInput = document.getElementById("checkoutQty");

  checkoutTitle.textContent = product.title;
  qtyInput.value = 1;
  
  // Reset form fields
  const phoneInput = document.getElementById("checkoutPhone");
  const nameInput = document.getElementById("checkoutName");
  const daySelect = document.getElementById("checkoutDay");
  
  if (phoneInput) phoneInput.value = "";
  if (nameInput) nameInput.value = "";
  if (daySelect) daySelect.selectedIndex = 0;

  updateTotalPrice();

  // Reset view to step 1
  document.getElementById("checkoutStep1").style.display = "block";
  document.getElementById("checkoutStep2").style.display = "none";

  checkoutModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateTotalPrice() {
  if (!currentCheckoutProduct) return;
  const qty = parseInt(document.getElementById("checkoutQty").value) || 1;
  const total = currentCheckoutProduct.price * qty;
  const priceBtn = document.getElementById("checkoutTotalPrice");
  if (priceBtn) {
    priceBtn.textContent = `PAGAR TOTAL: $ ${total.toLocaleString("es-AR")}`;
  }
}

function confirmPurchase() {
  const qty = parseInt(document.getElementById("checkoutQty").value) || 1;
  const phone = document.getElementById("checkoutPhone").value || "No especificado";
  const name = document.getElementById("checkoutName").value || "No especificado";
  const day = document.getElementById("checkoutDay").value || "No especificado";
  const total = currentCheckoutProduct.price * qty;

  // Update UI to Step 2
  document.getElementById("checkoutStep1").style.display = "none";
  document.getElementById("checkoutStep2").style.display = "block";

  const confirmTotal = document.getElementById("confirmTotal");
  if (confirmTotal) {
    confirmTotal.textContent = `$ ${total.toLocaleString("es-AR")}`;
  }

  // Format WhatsApp message
  const message = `🛍️ *NUEVA COMPRA EN OLIVERY*%0A%0A` +
    `*Producto:* ${currentCheckoutProduct.title}%0A` +
    `*Cantidad:* ${qty}%0A` +
    `*Total:* $${total.toLocaleString("es-AR")}%0A%0A` +
    `🔹 *Alias Mercado Pago:* olivery.cba%0A%0A` +
    `👤 *Cliente:* ${name}%0A` +
    `📱 *Celular:* ${phone}%0A` +
    `🚚 *Día de Entrega:* ${day}%0A%0A` +
    `_A la espera de confirmación de transferencia._`;

  // Format Email content
  const emailSubject = `PEDIDO DE ${name.toUpperCase()}`;
  const emailBody = `Resumen del Pedido:\n\n` +
    `Producto: ${currentCheckoutProduct.title}\n` +
    `Cantidad: ${qty}\n` +
    `Celular: ${phone}\n` +
    `Cliente: ${name}\n` +
    `Día de Entrega: ${day}\n` +
    `Monto: $${total.toLocaleString("es-AR")}`;

  // URLs
  const myNumber = "3512402359";
  const whatsappUrl = `https://wa.me/${myNumber}?text=${message}`;
  const mailtoUrl = `mailto:oliveryweb@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Launch WhatsApp
  window.open(whatsappUrl, "_blank");
  
  // Launch email client
  setTimeout(() => {
    window.location.href = mailtoUrl;
  }, 800);
}

function closeCheckoutModal() {
  const checkoutModal = document.getElementById("checkoutModal");
  if (checkoutModal) {
    checkoutModal.classList.remove("active");
    document.body.style.overflow = "";
  }
}
// =====================

function closeModalFunction() {
  activeModal.classList.remove("active");
  document.body.style.overflow = "";
}

// Event Listeners
productCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    // Check if clicked the WhatsApp button specifically
    if (e.target.closest(".buy-wa-btn")) {
      e.stopPropagation();
      const productId = card.getAttribute("data-product");
      openCheckout(productId);
      return;
    }

    // Default modal detail
    const productId = card.getAttribute("data-product");
    const product = productsData[productId];
    if (product) openModal(product);
  });
});

// Checkout specific listeners
document.addEventListener("click", (e) => {
  if (e.target.id === "confirmPurchaseBtn") {
    confirmPurchase();
  }
  if (e.target.id === "checkoutClose" || e.target.id === "checkoutModal") {
    closeCheckoutModal();
  }
});

const qtyInput = document.getElementById("checkoutQty");
if (qtyInput) {
  qtyInput.addEventListener("input", updateTotalPrice);
  qtyInput.addEventListener("change", () => {
    let val = parseInt(qtyInput.value);
    if (isNaN(val) || val < 1) qtyInput.value = 1;
    updateTotalPrice();
  });
}

activeClose?.addEventListener("click", closeModalFunction);
activeModal?.addEventListener("click", (e) => {
  if (e.target === activeModal) closeModalFunction();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModalFunction();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

document.querySelectorAll(".animate-on-scroll").forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.03}s`;
  observer.observe(el);
});

const header = document.querySelector(".main-header");
const progressBar = document.querySelector(".scroll-progress");
let ticking = false;

function updateOnScroll() {
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollY / docHeight) * 100;
  progressBar.style.width = `${scrolled}%`;

  const heroContent = document.querySelector(".hero-content");
  if (heroContent && scrollY < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
    heroContent.style.opacity = 1 - scrollY / (window.innerHeight * 0.9);
  }

  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  },
  { passive: true },
);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") return;
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

const themeToggle = document.getElementById("themeToggle");
const themeText = document.getElementById("themeText");
const body = document.body;

function updateThemeText(isDark) {
  themeText.textContent = isDark ? "MODO CLARO" : "MODO OSCURO";
}

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

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
      }
    });
    item.classList.toggle("active");
  });
});
