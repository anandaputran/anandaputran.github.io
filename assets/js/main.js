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
  renderProject(projects[activeProjectIndex]);
});

updateLanguage(currentLanguage);

// ===== Project Showcase =====
const projectImage = document.querySelector("#projectImage");
const projectNumber = document.querySelector("#projectNumber");
const projectCategory = document.querySelector("#projectCategory");
const projectTitle = document.querySelector("#projectTitle");
const projectFlow = document.querySelector("#projectFlow");
const projectDescription = document.querySelector("#projectDescription");
const projectTech = document.querySelector("#projectTech");
const projectAction = document.querySelector("#projectAction");
const projectActionLabel = document.querySelector("#projectActionLabel");
const projectThumbnails = document.querySelector("#projectThumbnails");

let activeProjectIndex = 0;

function renderProject(project) {
  projectImage.src = project.image;
  projectImage.alt = project.imageAlt;

  projectNumber.textContent = project.number;
  projectCategory.textContent = project.category[currentLanguage];
  projectTitle.textContent = project.title;
  projectFlow.textContent = project.flow[currentLanguage];
  projectDescription.textContent = project.description[currentLanguage];

  projectTech.innerHTML = "";

  project.tech.forEach((technology) => {
    const tag = document.createElement("span");
    tag.textContent = technology;
    projectTech.appendChild(tag);
  });

  projectAction.href = project.action.url;
  projectActionLabel.textContent = project.action.label[currentLanguage];
}

function renderProjectThumbnails() {
  projectThumbnails.innerHTML = "";

  projects.forEach((project, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "project-thumbnail";

    if (index === activeProjectIndex) {
      button.classList.add("active");
    }

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = "";

    const title = document.createElement("span");
    title.textContent = project.title;

    button.appendChild(image);
    button.appendChild(title);

    button.addEventListener("click", () => {
      activeProjectIndex = index;

      renderProject(projects[activeProjectIndex]);
      renderProjectThumbnails();
    });

    projectThumbnails.appendChild(button);
  });
}

renderProject(projects[activeProjectIndex]);
renderProjectThumbnails();
