// ============================================================
// CONFIGURAÇÃO DO SITE
// ============================================================

// Coloque aqui o número do WhatsApp da psicóloga.
// Formato internacional, sem +, espaços, parênteses ou traços.
// Exemplo para Brasil: 5547999999999
const whatsappNumber = "5500000000000";

const whatsappMessage =
  "Olá! Gostaria de saber mais sobre o atendimento psicológico online.";

const whatsappButton = document.getElementById("whatsapp-button");

if (whatsappButton) {
  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  whatsappButton.href = whatsappUrl;
}

// Ano automático no rodapé
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// ============================================================
// MENU MOBILE
// ============================================================

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Fecha o menu quando o usuário clica em um link
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
