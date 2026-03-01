const translations = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_experiences: "Experiences",
    nav_contact: "Contact",
    menu_button: "Menu",
    hero_tag: "Senior CSE Student | Software Engineer",
    hero_title: "About Me",
    hero_copy:
      "I am a software engineer passionate about building useful products and learning fast. I enjoy full-stack web development, AI applications, and solving real-world engineering problems.",
    hero_cta_projects: "View Projects",
    hero_cta_cv: "Read CV",
    projects_kicker: "Portfolio",
    projects_title: "Projects",
    experiences_kicker: "Career",
    experiences_title: "Experiences",
    contact_kicker: "Reach Out",
    contact_title: "Contact Information",
    contact_desc: "Open to internship, full-time, and collaboration opportunities.",
    contact_github: "GitHub",
    theme_light: "Light mode",
    theme_dark: "Dark mode",
    project_link: "GitHub"
  },
  tr: {
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_experiences: "Deneyimler",
    nav_contact: "İletişim",
    menu_button: "Menu",
    hero_tag: "4. Sınıf Bilgisayar Mühendisliği Öğrencisi | Yazılım Mühendisi",
    hero_title: "Hakkımda",
    hero_copy:
      "Faydalı ürünler geliştirmeye ve hızlı öğrenmeye tutkulu bir yazılım mühendisiyim. Full-stack web geliştirme, yapay zeka uygulamaları ve gerçek dünya problemlerine çözüm üretmeyi seviyorum.",
    hero_cta_projects: "Projeleri Gör",
    hero_cta_cv: "CV Oku",
    projects_kicker: "Portfolyo",
    projects_title: "Projeler",
    experiences_kicker: "Kariyer",
    experiences_title: "Deneyimler",
    contact_kicker: "Ulaşın",
    contact_title: "İletişim Bilgileri",
    contact_desc: "Staj, tam zamanlı ve iş birliği fırsatlarına açığım.",
    contact_github: "GitHub",
    theme_light: "Açık mod",
    theme_dark: "Koyu mod",
    project_link: "GitHub"
  }
};

const projectData = {
  en: [
    {
      title: "SUtore",
      description:
        "Web-based e-commerce app with Django backend and React frontend, including full customer purchase flow and role-based access.",
      stack: ["Django", "React", "Python", "JavaScript"],
      link: "https://github.com/MehmetErseker/SUtore"
    },
    {
      title: "QuizMaster",
      description:
        "Secure quiz app with authentication, social login, Open Trivia API integration, server-side scoring, leaderboard, and score history.",
      stack: ["Web App", "API Integration", "Authentication", "JavaScript"],
      link: "https://github.com/MehmetErseker/QuizMaster"
    },
    {
      title: "Domain Generalized Remote Sensing Scene Classification",
      description:
        "Graduation project focused on domain generalization for satellite imagery using BigEarthNet and modern deep learning architectures.",
      stack: ["Python", "PyTorch", "Deep Learning", "Mamba SSM"],
      link: "https://github.com/MehmetErseker"
    }
  ],
  tr: [
    {
      title: "SUtore",
      description:
        "Django backend ve React frontend ile geliştirilmiş, tam müşteri satın alma akışına ve rol bazlı yetkilendirmeye sahip web tabanlı e-ticaret uygulaması.",
      stack: ["Django", "React", "Python", "JavaScript"],
      link: "https://github.com/MehmetErseker/SUtore"
    },
    {
      title: "QuizMaster",
      description:
        "Doğrulama ve sosyal giriş özelliklerine sahip güvenli quiz uygulaması. Open Trivia API entegrasyonu, sunucu taraflı puanlama, liderlik tablosu ve puan geçmişi içerir.",
      stack: ["Web Uygulaması", "API Entegrasyonu", "Kimlik Doğrulama", "JavaScript"],
      link: "https://github.com/MehmetErseker/QuizMaster"
    },
    {
      title: "Domain Generalized Remote Sensing Scene Classification",
      description:
        "BigEarthNet veri seti ve modern derin öğrenme mimarileri kullanarak uydu görüntülerinde domain genelleme odaklı bitirme projesi.",
      stack: ["Python", "PyTorch", "Derin Öğrenme", "Mamba SSM"],
      link: "https://github.com/MehmetErseker"
    }
  ]
};

const experienceData = {
  en: [
    {
      role: "Software Developer Intern",
      company: "Penta Teknoloji",
      period: "Jul 2025 - Sep 2025",
      location: "Istanbul, Turkiye",
      summary:
        "Built PentaStore with .NET Core, React, and MySQL, and integrated voice/image-based product search using Google Cloud APIs.",
      link: "https://github.com/MehmetErseker/PentaStore"
    },
    {
      role: "Attempter",
      company: "Scale AI / Outlier",
      period: "Oct 2024 - Feb 2025",
      location: "Remote",
      summary:
        "Designed prompts to evaluate instruction-following and factual accuracy, then analyzed and corrected model outputs."
    }
  ],
  tr: [
    {
      role: "Yazılım Geliştirici Stajyeri",
      company: "Penta Teknoloji",
      period: "Tem 2025 - Eyl 2025",
      location: "İstanbul, Türkiye",
      summary:
        ".NET Core, React ve MySQL ile PentaStore'u geliştirdim; Google Cloud API'leriyle ses/görüntü tabanlı ürün aramasını entegre ettim.",
      link: "https://github.com/MehmetErseker/PentaStore"
    },
    {
      role: "Girişimci",
      company: "Scale AI / Outlier",
      period: "Eki 2024 - Şub 2025",
      location: "Uzaktan",
      summary:
        "Modelin talimat takibi ve olgusal doğruluğunu ölçen promptlar hazırladım, çıktıları analiz ederek düzeltmeler yaptım."
    }
  ]
};

const projectsGrid = document.getElementById("projectsGrid");
const experiencesList = document.getElementById("experiencesList");
const yearEl = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const i18nNodes = document.querySelectorAll("[data-i18n]");

const storedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");

const storedLang = localStorage.getItem("lang");
let currentLang = storedLang === "tr" ? "tr" : "en";

const t = (key) => translations[currentLang][key] || key;

const updateThemeLabel = (theme) => {
  if (!themeToggle) {
    return;
  }
  const isDark = theme === "dark";
  themeToggle.textContent = isDark ? t("theme_light") : t("theme_dark");
  themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeLabel(theme);
};

const updateLangButton = () => {
  if (!langToggle) {
    return;
  }
  langToggle.textContent = currentLang === "tr" ? "EN" : "TR";
  langToggle.setAttribute(
    "aria-label",
    currentLang === "tr" ? "Switch to English" : "Türkçeye geç"
  );
};

const renderProjects = () => {
  if (!projectsGrid) {
    return;
  }
  const items = projectData[currentLang] || projectData.en;
  projectsGrid.innerHTML = "";
  items.forEach((project) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="chip-row">
        ${project.stack.map((item) => `<span class="chip">${item}</span>`).join("")}
      </div>
      <p><a class="btn btn-ghost" target="_blank" rel="noopener noreferrer" href="${project.link}">${t("project_link")}</a></p>
    `;
    projectsGrid.appendChild(card);
  });
};

const renderExperiences = () => {
  if (!experiencesList) {
    return;
  }
  const items = experienceData[currentLang] || experienceData.en;
  experiencesList.innerHTML = "";
  items.forEach((experience) => {
    const item = document.createElement("article");
    item.className = "experience-item";
    item.innerHTML = `
      <h3>${experience.role}</h3>
      <p class="experience-meta">${experience.company} | ${experience.period}</p>
      <p class="experience-meta">${experience.location}</p>
      <p>${experience.summary}</p>
      ${
        experience.link
          ? `<p><a class="btn btn-ghost" target="_blank" rel="noopener noreferrer" href="${experience.link}">${t("project_link")}</a></p>`
          : ""
      }
    `;
    experiencesList.appendChild(item);
  });
};

const applyLanguage = (lang) => {
  currentLang = lang === "tr" ? "tr" : "en";
  document.documentElement.lang = currentLang;
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (key && translations[currentLang][key]) {
      node.textContent = translations[currentLang][key];
    }
  });
  updateLangButton();
  updateThemeLabel(document.documentElement.getAttribute("data-theme") || "light");
  renderProjects();
  renderExperiences();
};

applyTheme(initialTheme);
applyLanguage(currentLang);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLang = currentLang === "tr" ? "en" : "tr";
    applyLanguage(nextLang);
    localStorage.setItem("lang", nextLang);
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

if (menuToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 840) {
      closeMenu();
    }
  });
}
