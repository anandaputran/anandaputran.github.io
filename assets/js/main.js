// ===== Mobile Navigation =====

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";
    });
});

// ===== Language Switcher =====

const languageToggle = document.querySelector(".language-toggle");

let currentLanguage = "en";

function updateLanguage(language) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    languageToggle.textContent = language === "en" ? "ID" : "EN";
}

languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "id" : "en";

    updateLanguage(currentLanguage);
});