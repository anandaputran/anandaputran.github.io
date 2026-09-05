// ===== Mobile Navigation =====

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

function closeMobileMenu() {
  navLinks.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  menuToggle.textContent = "☰";
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navItems.forEach((item) => {
  item.addEventListener("click", closeMobileMenu);
});

document.addEventListener("click", (event) => {
  const clickedInsideNav = navLinks.contains(event.target);
  const clickedMenuToggle = menuToggle.contains(event.target);

  if (!clickedInsideNav && !clickedMenuToggle) {
    closeMobileMenu();
  }
});

document.addEventListener("keydown", (event) => {
  const isMenuOpen = navLinks.classList.contains("active");

  if (event.key === "Escape" && isMenuOpen) {
    closeMobileMenu();
    menuToggle.focus();
  }
});

// ===== Language Switcher =====

const languageToggle = document.querySelector(".language-toggle");
const languageLabel = document.querySelector(".language-label");

let currentLanguage = localStorage.getItem("language") || "en";

function updateLanguage(language) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  document.documentElement.lang = language;

  languageLabel.textContent = language === "en" ? "ID" : "EN";

  localStorage.setItem("language", language);
}

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "id" : "en";

  updateLanguage(currentLanguage);
});

updateLanguage(currentLanguage);
