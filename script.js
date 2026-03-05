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
    title: "Aceto Balsámico Clásico Casalta x 250 ml",
    image: "casalta.png",
    price: 4000,
    description: [
      "Casalta es la marca líder de Porta Hermanos, empresa cordobesa con más de 140 años de historia.",
      "Este Aceto Balsámico Clásico destaca por su acidez intensa y equilibrada, al estilo de Modena.",
      "Se elabora mediante una receta tradicional que combina vinagres seleccionados y mosto de uva.",
      "En nariz, ofrece notas frutales dulces que delatan la calidad de su materia prima de origen.",
      "Su sabor envuelve el paladar con una mezcla armoniosa de notas agrias y un final dulce persistente.",
      "Es el aliado perfecto para realzar el sabor de ensaladas diarias, vegetales asados y marinados.",
      "Su versatilidad permite utilizarlo también en recetas de carnes blancas e incluso en coctelería.",
      "La presentación en envase PET de 250 ml garantiza una larga vida útil y frescura del producto.",
      "Incluye el práctico pico dosificador que permite un servicio preciso y evita derrames accidentales.",
      "Un clásico indispensable en los hogares argentinos que valoran la tradición industrial y el buen sabor.",
    ],
  },
  9: {
    title: "Aceite Familia Zuccardi Coratina x 250 ml",
    image: "coratina_final.png",
    price: 11400,
    description: [
      "El Aceite Coratina es el varietal más intenso de la línea Aceites Varietales de la Familia Zuccardi, elaborado en Maipú, Mendoza.",
      "La variedad Coratina, originaria de la región italiana de Puglia, alcanza en el terruño mendocino su máxima expresión aromática.",
      "En nariz, presenta un aroma complejo e inconfundible: notas a tallo verde, nuez fresca y cáscara de banana.",
      "Pueden aparecer también matices tostados y un sugestivo toque a café que enriquecen su perfil sensorial único.",
      "En boca, exhibe una destacada y persistente intensidad de amargos, rasgo característico de las aceitunas Coratina en su punto óptimo.",
      "Su marcado y prolongado picor al final del paladar es señal inconfundible de su altísima concentración de polifenoles naturales.",
      "Es uno de los aceites con mayor estabilidad oxidativa del mercado, lo que garantiza una vida útil y frescura excepcionales.",
      "Ideal para platos de carácter: pastas con ragú, carnes rojas a la parrilla, bruschetta, quesos curados y guisos.",
      "El envase de vidrio de 250 ml con pico dosificador antigoteo preserva intacta su complejidad aromática y protege el aceite de la luz.",
      "Elegir el Coratina Zuccardi es apostar por un AOVE de clase mundial, con carácter propio y una historia familiar centenaria.",
    ],
  },
  10: {
    title: "Aceite Familia Zuccardi Genovesa x 250 ml",
    image: "genovesa_final.png",
    price: 11400,
    description: [
      "El Aceite Genovesa es el varietal más delicado y complejo de la línea Aceites Varietales de la Familia Zuccardi, elaborado en Mendoza.",
      "La variedad Genovesa es una cultivar de origen italiano adaptada con maestría al excepcional terruño de los Valles Mendocinos.",
      "En nariz, despliega un frutado de intensidad media, elegante y refinado, con notas limpias y muy características.",
      "Su aroma principal evoca a hierbas frescas y manzana verde, con la frescura propia de aceitunas cosechadas en su punto ideal.",
      "En ocasiones, el perfil aromático se enriquece con notas más maduras, como suaves toques de frutos rojos que lo hacen único.",
      "En boca, es un aceite profundamente equilibrado, que evita extremos de amargor o picor para priorizar la armonía de sabores.",
      "Su frutado resulta complejo y persistente en el paladar, revelando capas de sabor que se desarrollan lentamente con cada sorbo.",
      "Es la elección perfecta para quienes buscan un AOVE fino y versátil: ensaladas de hojas verdes, pescados y carpaccios.",
      "El envase de vidrio de 250 ml con pico dosificador antigoteo garantiza la protección de su delicado perfil aromático.",
      "Elegir el Genovesa Zuccardi es incorporar a tu mesa la fineza de un varietal único, con la firma de una familia centenaria.",
    ],
  },
  11: {
    title: "Aceite Familia Zuccardi Picual x 250 ml",
    image: "picual_final.png",
    price: 11400,
    description: [
      "El Aceite Picual es el varietal más aromático y versátil de la línea Aceites Varietales de la Familia Zuccardi, elaborado en Mendoza.",
      "La variedad Picual, la más cultivada del mundo y reina indiscutida de la olivicultura española, encuentra en Mendoza su mejor expresión.",
      "Su perfil aromático varía según el punto de cosecha, ofreciendo notas herbáceas, hoja de tomate y manzana fresca cuando es temprana.",
      "En cosechas más anticipadas, aparecen elegantes notas a higuera que aportan una complejidad vegetal y fresca muy particular.",
      "En puntos de madurez más tardíos, el perfil evoluciona hacia toques de hoja de ruda, agregando profundidad y carácter al aceite.",
      "En boca, su frutado es normalmente intenso y sabroso, con un amargor y picante medios que garantizan presencia sin agresividad.",
      "Es considerado uno de los aceites con mayor estabilidad y resistencia a la oxidación, ideal para la cocina y el uso en crudo.",
      "Su perfil intenso lo convierte en el acompañante ideal de guisos, asados, tostadas con tomate y aliños de ensaladas.",
      "El envase de vidrio de 250 ml con pico dosificador antigoteo preserve intacta su riqueza aromática y protege el aceite de la luz.",
      "Elegir el Picual Zuccardi es llevar a tu mesa la variedad más conocida del mundo con el sello de calidad de una familia centenaria.",
    ],
  },
  12: {
    title: "Aceite Zuelo Virgen Extra Blend Original x 500 ml",
    image: "zuelo-500.png",
    price: 17600,
    description: [
      "Zuelo es el prestigioso proyecto olivícola de la Familia Zuccardi, nacido en Maipú, Mendoza.",
      "La versión Original es un blend equilibrado de variedades meticulosamente seleccionadas, entre ellas Arbequina, Picual y Coratina.",
      "Se distingue por una frescura inigualable, fruto de un proceso de extracción inmediata posterior a la recolección.",
      "En nariz, ofrece notas herbáceas intensas, acompañadas de fragancias muy singulares a banana verde y pasto recién cortado.",
      "Su perfil de sabor es rico y frutado, presentando un amargor medio sutil y un regusto picante que resulta sumamente agradable.",
      "Se trata de un aceite con gran carácter, que refleja la autenticidad del terruño mendocino y la pasión constante de la familia.",
      "Resulta el acompañante ideal para aderezar generosas ensaladas, pastas con vegetales o para potenciar carnes asadas.",
      "Su presentación de 500 ml es perfecta para quienes buscan el mayor rendimiento sin sacrificar calidad.",
      "El envase de vidrio cuenta con un práctico pico dosificador que brinda precisión y comodidad al momento de servir.",
      "Zuelo Original de 500 ml asegura un aceite virgen extra de nivel superior para el uso cotidiano en los mejores platos.",
    ],
  },
  13: {
    title: "Aceite Hilal Virgen Extra Blend Doña Sofía x 500 ml",
    image: "hilal.png",
    price: 12900,
    description: [
      'El aceite de oliva virgen extra Hilal "Doña Sofía" Blend es un producto artesanal y agroecológico elaborado en Argentina.',
      "Producido mediante procesos 100% naturales que preservan intacto su alto valor nutricional y propiedades benéficas.",
      "Resulta de una mezcla equilibrada de cuatro distinguidas variedades de aceitunas: Arbequina, Arauco, Frantoio y Manzanilla.",
      "Dentro de su perfil de sabor, se destaca especialmente por su suavidad inigualable al paladar.",
      "Logra una combinación perfecta donde el picor y el amargor son sutiles, realzando el sabor de las comidas sin invadirlas.",
      "La extracción se obtiene mediante primera presión en frío, lo que garantiza la pureza y la máxima calidad del aceite.",
      'La cosecha se realiza de forma manual utilizando el tradicional método de "ordeño", cuidando el fruto desde el origen.',
      "Su proceso de elaboración cuenta con molienda fina en molino de piedra y un cuidadoso decantado completamente natural.",
      "No recibe agentes químicos ni tratamientos industriales agresivos que puedan alterar o comprometer su composición original.",
      "Es una opción excepcional para quienes buscan un aceite 100% natural, ideal para cuidar la salud y disfrutar del mejor sabor.",
    ],
  },
  14: {
    title: "Aceite Tupelí Extra Virgen x 500 ml",
    image: "tupeli-500.png",
    price: 14700,
    description: [
      "Producido por GAMA S.R.L., empresa familiar fundada en 1949 por Julio Marún en San Juan, Argentina.",
      "Elaborado con aceitunas frescas seleccionadas de la ladera sureste del Cerro Villicum, en el corazón del Valle del Tulum.",
      "Este Aceite de Oliva Extra Virgen premium destaca por su equilibrio perfecto entre notas frutales y un toque herbáceo.",
      "Presenta aromas a aceituna madura con un perfil sensorial armonioso que refleja la herencia de más de 70 años.",
      "Su sabor posee un amargor y picor ligeros en grado medio, característicos de frutos procesados en su punto óptimo.",
      "Garantiza una bajísima acidez y una alta concentración de polifenoles naturales gracias a su cuidadosa extracción.",
      "Es el compañero ideal para ensaladas mediterráneas, quesos de pasta dura y para finalizar platos de carnes o pastas.",
      "La pureza de Tupelí es el resultado de un compromiso inquebrantable con la calidad y la trazabilidad en origen.",
      "Cada botella de 500 ml transporta la esencia del sol sanjuanino y la tradición de una de las marcas más emblemáticas de la región.",
      "Su Establecimiento cuenta con el Museo Don Julio, donde se preserva la historia viva de la olivicultura nacional.",
    ],
  },
  15: {
    title: "Aceite Hilal Virgen Extra Blend Doña Sofía x 500 ml",
    image: "hilal-55-v.png",
    price: 15200,
    description: [
      'El aceite de oliva virgen extra Hilal "Doña Sofía" Blend es un producto artesanal y agroecológico elaborado en Argentina.',
      "Producido mediante procesos 100% naturales que preservan intacto su alto valor nutricional y propiedades benéficas.",
      "Resulta de una mezcla equilibrada de cuatro distinguidas variedades de aceitunas: Arbequina, Arauco, Frantoio y Manzanilla.",
      "Dentro de su perfil de sabor, se destaca especialmente por su suavidad inigualable al paladar.",
      "Logra una combinación perfecta donde el picor y el amargor son sutiles, realzando el sabor de las comidas sin invadirlas.",
      "La extracción se obtiene mediante primera presión en frío, lo que garantiza la pureza y la máxima calidad del aceite.",
      'La cosecha se realiza de forma manual utilizando el tradicional método de "ordeño", cuidando el fruto desde el origen.',
      "Su proceso de elaboración cuenta con molienda fina en molino de piedra y un cuidadoso decantado completamente natural.",
      "Esta presentación en un elegante envase de vidrio con pico dosificador protege y facilita el uso de tu aceite.",
      "Es una opción excepcional para quienes buscan un aceite 100% natural, ideal para cuidar la salud y disfrutar del mejor sabor.",
    ],
  },
  16: {
    title: "Aceite Hilal Virgen Extra Blend Doña Sofía x 1000 ml",
    image: "hilal-1L.png",
    price: 23900,
    description: [
      'El aceite de oliva virgen extra Hilal "Doña Sofía" Blend es un producto artesanal y agroecológico elaborado en Argentina.',
      "Producido mediante procesos 100% naturales que preservan intacto su alto valor nutricional y propiedades benéficas.",
      "Resulta de una mezcla equilibrada de cuatro distinguidas variedades de aceitunas: Arbequina, Arauco, Frantoio y Manzanilla.",
      "Dentro de su perfil de sabor, se destaca especialmente por su suavidad inigualable al paladar.",
      "Logra una combinación perfecta donde el picor y el amargor son sutiles, realzando el sabor de las comidas sin invadirlas.",
      "La extracción se obtiene mediante primera presión en frío, lo que garantiza la pureza y la máxima calidad del aceite.",
      'La cosecha se realiza de forma manual utilizando el tradicional método de "ordeño", cuidando el fruto desde el origen.',
      "Su proceso de elaboración cuenta con molienda fina en molino de piedra y un cuidadoso decantado completamente natural.",
      "La presentación de 1000 ml en envase PET de alta densidad es ideal para el uso diario y la mejor relación precio-rendimiento.",
      "Es una opción excepcional para quienes buscan un aceite 100% natural, ideal para cuidar la salud y disfrutar del mejor sabor.",
    ],
  },
  17: {
    title: "Aceite Familia Zuccardi Genovesa x 500 ml",
    image: "genovesa-500.png",
    price: 19900,
    description: [
      "El Aceite Genovesa 500 ml es la presentación más generosa del varietal más delicado de la Familia Zuccardi, elaborado en Mendoza.",
      "La variedad Genovesa es una cultivar de origen italiano adaptada con maestría al excepcional terruño de los Valles Mendocinos.",
      "En nariz, despliega un frutado de intensidad media, elegante y refinado, con notas limpias y muy características.",
      "Su aroma principal evoca a hierbas frescas y manzana verde, con la frescura propia de aceitunas cosechadas en su punto ideal.",
      "En ocasiones, el perfil aromático se enriquece con notas más maduras, como suaves toques de frutos rojos que lo hacen único.",
      "En boca, es un aceite profundamente equilibrado, que evita extremos de amargor o picor para priorizar la armonía de sabores.",
      "Su frutado resulta complejo y persistente en el paladar, revelando capas de sabor que se desarrollan lentamente con cada sorbo.",
      "Es la elección perfecta para quienes buscan un AOVE fino y versátil: ensaladas de hojas verdes, pescados y carpaccios.",
      "El envase de vidrio de 500 ml con pico dosificador antigoteo garantiza la protección de su delicado perfil aromático.",
      "Elegir el Genovesa Zuccardi 500 ml es incorporar a tu mesa la fineza de un varietal único, con la firma de una familia centenaria.",
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
  const phone = document.getElementById("checkoutPhone").value.trim();
  const name = document.getElementById("checkoutName").value.trim();
  const day = document.getElementById("checkoutDay").value;

  if (!name || !phone || !day) {
    const missing = [];
    if (!name) missing.push("Nombre");
    if (!phone) missing.push("Celular");
    if (!day) missing.push("Día de entrega");
    alert("Por favor completá: " + missing.join(", "));
    return;
  }

  const total = currentCheckoutProduct.price * qty;

  // Update UI to Step 2
  document.getElementById("checkoutStep1").style.display = "none";
  document.getElementById("checkoutStep2").style.display = "block";

  const confirmTotal = document.getElementById("confirmTotal");
  if (confirmTotal) {
    confirmTotal.textContent = `$ ${total.toLocaleString("es-AR")}`;
  }

  // Format WhatsApp message
  const whatsappMessage =
    `🛍️ *NUEVA COMPRA EN OLIVERY*%0A%0A` +
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
  const emailBody =
    `Resumen del Pedido:\n\n` +
    `Producto: ${currentCheckoutProduct.title}\n` +
    `Cantidad: ${qty}\n` +
    `Monto a Pagar: $${total.toLocaleString("es-AR")}\n\n` +
    `📌 Alias Mercado Pago: olivery.cba\n\n` +
    `Cliente: ${name}\n` +
    `Celular: ${phone}\n` +
    `Día de Entrega: ${day}`;

  // URLs
  const myNumber = "3512402359";
  const whatsappUrl = `https://wa.me/${myNumber}?text=${whatsappMessage}`;
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
  if (e.key === "Escape") {
    closeModalFunction();
    closeCheckoutModal();
  }
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
