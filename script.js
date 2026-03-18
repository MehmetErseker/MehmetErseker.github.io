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
      "I am a Senior Computer Science and Engineering student at Sabancı University, focused on building software solutions that are practical, scalable, and impactful. My interests include full-stack development, AI applications, deep learning, and cloud technologies, and I enjoy working on projects that turn complex ideas into reliable products. I am especially motivated by solving real-world problems through technology and creating systems that balance performance, usability, and clear purpose. I am eager to keep developing as a software engineer and contribute to meaningful products in fast-moving, innovative environments.",
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
    contact_linkedin: "LinkedIn",
    theme_light: "Light mode",
    theme_dark: "Dark mode",
    project_link: "GitHub",
    gallery_link: "Gallery",
    gallery_kicker: "Screenshots",
    gallery_suffix: "Gallery",
    gallery_not_found: "Gallery not found for this item.",
    gallery_back_projects: "Back to Projects",
    gallery_back_experiences: "Back to Experiences"
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
      "Sabancı Üniversitesi Bilgisayar Bilimi ve Mühendisliği bölümünde son sınıf öğrencisiyim. Pratik, ölçeklenebilir ve etkili yazılım çözümleri geliştirmeye odaklanıyorum. İlgi alanlarım arasında full-stack geliştirme, yapay zeka uygulamaları, derin öğrenme ve bulut teknolojileri yer almaktadır. Karmaşık fikirleri güvenilir ürünlere dönüştüren projelerde çalışmaktan keyif alıyorum. Teknoloji yoluyla gerçek dünyadaki sorunları çözmek ve performans, kullanılabilirlik ve net bir amacı dengeleyen sistemler oluşturmak beni özellikle motive ediyor. Yazılım mühendisi olarak gelişmeye devam etmek ve hızlı değişen, yenilikçi ortamlarda anlamlı ürünlere katkıda bulunmak için sabırsızlanıyorum.",
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
    contact_linkedin: "LinkedIn",
    theme_light: "Açık mod",
    theme_dark: "Koyu mod",
    project_link: "GitHub",
    gallery_link: "Galeri",
    gallery_kicker: "Ekran Görselleri",
    gallery_suffix: "Galerisi",
    gallery_not_found: "Bu öğe için galeri bulunamadı."
  }
};

const projectData = {
  en: [
    {
      title: "SUtore",
      description:
        "Developed SUtore, a web-based online store using Django for the backend and React for the frontend, as part of Software Engineering course project. The application delivers a comprehensive e-commerce experience with essential shopping functionalities and a modern, interactive user interface.",
      stack: ["Django", "React", "Full-Stack", "Authorization", "Authentication", "Python", "JavaScript"],
      link: "https://github.com/MehmetErseker/SUtore",
      gallerySlug: "sutore"
    },
    {
      title: "QuizMaster",
      description:
        "Secure quiz app with authentication, social login, Open Trivia API integration, server-side scoring, leaderboard, and score history.",
      stack: ["Express", "React", "MongoDB", "MERN", "API Integration","Social Login", "Authentication"],
      link: "https://github.com/MehmetErseker/QuizMaster",
      gallerySlug: "quizmaster"
    },
    {
      title: "Domain Generalized Remote Sensing Scene Classification",
      description:
        "Graduation project focused on domain generalization for satellite imagery using BigEarthNet and modern deep learning architectures.",
      stack: ["Deep Learning", "Remote Sensing", "Domain Generalization", "Scene Classification"],
      link: "https://github.com/Alicebecii/GraduationProject"
    },
    {
      title: "Client–Server Multiplayer Quiz System over TCP/IP",
      description:
        "Developed a multiplayer quiz platform utilizing TCP/IP socket programming in Python. Worked in a two-person team to implement the server–client architecture, design the communication protocol, and manage real-time interactions between players and the server. Emphasized reliable data exchange and synchronization to support stable multiplayer functionality.",
      stack: ["Python", "TCP/IP Sockets", "Multiplayer", "Client-Server Architecture"],
      link: "https://github.com/MehmetErseker/Client-Server-Quiz-Application"
    }
  ],
  tr: [
    {
      title: "SUtore",
      description:
        "Yazılım Mühendisliği dersinin projesi kapsamında, backend için Django ve frontend için React kullanılarak web tabanlı bir çevrimiçi mağaza olan SUtore'u geliştirdim. Uygulama, temel alışveriş işlevleri ve modern, etkileşimli bir kullanıcı arayüzü ile kapsamlı bir e-ticaret deneyimi sunuyor.",
      stack: ["Django", "React", "Full-Stack", "Yetkilendirme", "Kimlik Doğrulama", "Python", "JavaScript"],
      link: "https://github.com/MehmetErseker/SUtore",
      gallerySlug: "sutore"
    },
    {
      title: "QuizMaster",
      description:
        "Doğrulama ve sosyal giriş özelliklerine sahip güvenli quiz uygulaması. Open Trivia API entegrasyonu, sunucu taraflı puanlama, liderlik tablosu ve puan geçmişi içerir.",
      stack: ["Express", "React", "MongoDB", "MERN", "API Entegrasyonu","Sosyal Giriş", "Kimlik Doğrulama"],
      link: "https://github.com/MehmetErseker/QuizMaster",
      gallerySlug: "quizmaster"
    },
    {
      title: "Domain Generalized Remote Sensing Scene Classification",
      description:
        "BigEarthNet veri seti ve modern derin öğrenme mimarileri kullanarak uydu görüntülerinde domain genelleme odaklı bitirme projesi.",
      stack: ["Derin Öğrenme", "Uzaktan Algılama", "Domain Genelleme", "Sahne Sınıflandırma"],
      link: "https://github.com/Alicebecii/GraduationProject"
    },
    {
      title: "TCP/IP Üzerinde İstemci-Sunucu Çok Oyunculu Quiz Sistemi",
      description:
        "Python dilinde TCP/IP soket programlamasını kullanarak çok oyunculu bir bilgi yarışması platformu geliştirdim. İki kişilik bir ekipte çalışarak sunucu-istemci mimarisini hayata geçirdim, iletişim protokolünü tasarladım ve oyuncular ile sunucu arasındaki gerçek zamanlı etkileşimleri yönettim. Kararlı çok oyunculu işlevselliği desteklemek için güvenilir veri alışverişi ve senkronizasyona özel önem verdim.",
      stack: ["Python", "TCP/IP Sockets", "Çok Oyunculu", "İstemci-Sunucu Mimarisi"],
      link: "https://github.com/MehmetErseker/Client-Server-Quiz-Application"
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
        "At Penta Teknoloji, I worked as a Software Developer Intern where I developed PentaStore, a monolithic e-commerce web application using .NET Core, React, and MySQL, and delivered core features such as authentication, product search, cart, and checkout with a modern, interactive UI. I also integrated voice- and image-based product search using Google Cloud Speech-to-Text and Google Cloud Vision API, isolating these integrations in separate Python virtual environments to prevent dependency conflicts.",
      link: "https://github.com/MehmetErseker/PentaStore",
      gallerySlug: "pentastore"
    },
    {
      role: "Attempter",
      company: "Scale AI / Outlier",
      period: "Oct 2024 - Feb 2025",
      location: "Remote",
      summary:
        "At Scale AI – Outlier, I worked as an Attempter, designing challenging prompts to evaluate different AI models instruction following, factual accuracy, and overall response quality. I analyzed and documented errors across generated responses and then corrected issues in the best-performing output to help improve response quality."
    }
  ],
  tr: [
    {
      role: "Yazılım Geliştirici Stajyeri",
      company: "Penta Teknoloji",
      period: "Tem 2025 - Eyl 2025",
      location: "İstanbul, Türkiye",
      summary:
        "Penta Teknoloji’de Yazılım Geliştirici Stajyeri olarak, .NET Core, React ve MySQL kullanarak PentaStore adlı monolithic bir e-ticaret web uygulaması geliştirdim; kimlik doğrulama ile birlikte ürün arama, sepet ve ödeme gibi temel iş akışlarını modern ve etkileşimli bir arayüzle hayata geçirdim. Ayrıca Google Cloud Speech-to-Text ve Google Cloud Vision API’lerini entegre ederek sesli ve görsel tabanlı ürün arama özellikleri ekledim ve bağımlılık çakışmalarını önlemek için bu entegrasyonları ayrı Python sanal ortamlarında izole şekilde yönettim.",
      link: "https://github.com/MehmetErseker/PentaStore",
      gallerySlug: "pentastore"
    },
    {
      role: "Girişimci",
      company: "Scale AI / Outlier",
      period: "Eki 2024 - Şub 2025",
      location: "Uzaktan",
      summary:
        "Scale AI – Outlier’da Girişimci olarak farklı yapay zekâ modellerinin yönerge takibi, olgusal doğruluğu ve yanıt kalitesini değerlendirmek için zorlayıcı prompt’lar tasarladım. Üretilen yanıtlar üzerindeki hataları analiz edip dokümante ettikten sonra, en iyi performans gösteren çıktıda tespit edilen sorunları düzelterek yanıt kalitesinin iyileştirilmesine katkı sağladım."
    }
  ]
};

const galleryData = {
  sutore: {
    name: { en: "SUtore", tr: "SUtore" },
    images: [
      { src: "images/SUtore1.png", alt: "SUtore screenshot 1" },
      { src: "images/SUtore2.png", alt: "SUtore screenshot 2" },
      { src: "images/SUtore3.png", alt: "SUtore screenshot 3" },
      { src: "images/SUtore4.png", alt: "SUtore screenshot 4" },
      { src: "images/SUtore5.png", alt: "SUtore screenshot 5" },
      { src: "images/SUtore6.png", alt: "SUtore screenshot 6" }
    ]
  },
  pentastore: {
    name: { en: "PentaStore", tr: "PentaStore" },
    images: [
      { src: "images/PentaStore1.png", alt: "PentaStore screenshot 1" },
      { src: "images/PentaStore2.png", alt: "PentaStore screenshot 2" },
      { src: "images/PentaStore3.png", alt: "PentaStore screenshot 3" },
      { src: "images/PentaStore4.png", alt: "PentaStore screenshot 4" },
      { src: "images/PentaStore5.png", alt: "PentaStore screenshot 5" },
      { src: "images/PentaStore6.png", alt: "PentaStore screenshot 6" }
    ]
  },
  quizmaster: {
    name: { en: "QuizMaster", tr: "QuizMaster" },
    images: [
      { src: "images/QuizMaster1.png", alt: "QuizMaster screenshot 1" },
      { src: "images/QuizMaster2.png", alt: "QuizMaster screenshot 2" },
      { src: "images/QuizMaster3.png", alt: "QuizMaster screenshot 3" },
      { src: "images/QuizMaster4.png", alt: "QuizMaster screenshot 4" },
      { src: "images/QuizMaster5.png", alt: "QuizMaster screenshot 5" },
      { src: "images/QuizMaster6.png", alt: "QuizMaster screenshot 6" }
    ]
  }
};

const projectsGrid = document.getElementById("projectsGrid");
const experiencesList = document.getElementById("experiencesList");
const galleryTitle = document.getElementById("galleryTitle");
const galleryGrid = document.getElementById("galleryGrid");
const galleryMessage = document.getElementById("galleryMessage");
const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const yearEl = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const i18nNodes = document.querySelectorAll("[data-i18n]");

const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const isThemeValue = (value) => value === "light" || value === "dark";
const getSystemTheme = () => (themeMediaQuery.matches ? "dark" : "light");

const storedTheme = localStorage.getItem("theme");
const initialTheme = isThemeValue(storedTheme) ? storedTheme : getSystemTheme();

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

const setCardGalleryBehavior = (element, gallerySlug) => {
  if (!element || !gallerySlug) {
    return;
  }

  const galleryUrl = `gallery.html?item=${encodeURIComponent(gallerySlug)}`;
  element.classList.add("clickable-card");
  element.setAttribute("role", "link");
  element.setAttribute("tabindex", "0");

  element.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      return;
    }
    window.location.href = galleryUrl;
  });

  element.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && !event.target.closest("a, button")) {
      event.preventDefault();
      window.location.href = galleryUrl;
    }
  });
};

const openLightbox = (src, alt) => {
  if (!imageLightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src = src;
  lightboxImage.alt = alt || "";
  imageLightbox.classList.add("open");
  imageLightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  if (!imageLightbox || !lightboxImage) {
    return;
  }

  imageLightbox.classList.remove("open");
  imageLightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = "";
};

const initLightbox = () => {
  if (!imageLightbox) {
    return;
  }

  imageLightbox.addEventListener("click", (event) => {
    if (event.target === imageLightbox) {
      closeLightbox();
    }
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && imageLightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
};

const renderProjects = () => {
  if (!projectsGrid) {
    return;
  }

  const items = projectData[currentLang] || projectData.en;
  projectsGrid.innerHTML = "";
  items.forEach((project) => {
    const galleryUrl = project.gallerySlug
      ? `gallery.html?item=${encodeURIComponent(project.gallerySlug)}`
      : "";
    const hasActions = project.link || project.gallerySlug;
    const item = document.createElement("article");
    item.className = "project-item";

    item.innerHTML = `
      <div class="project-main">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="chip-row">
          ${project.stack.map((stackItem) => `<span class="chip">${stackItem}</span>`).join("")}
        </div>
      </div>
      ${
        hasActions
          ? `<div class="project-actions">
              ${
                project.link
                  ? `<a class="btn btn-ghost" target="_blank" rel="noopener noreferrer" href="${project.link}">${t("project_link")}</a>`
                  : ""
              }
              ${
                project.gallerySlug
                  ? `<a class="btn btn-ghost" href="${galleryUrl}">${t("gallery_link")}</a>`
                  : ""
              }
            </div>`
          : ""
      }
    `;
    setCardGalleryBehavior(item, project.gallerySlug);
    projectsGrid.appendChild(item);
  });
};

const renderExperiences = () => {
  if (!experiencesList) {
    return;
  }

  const items = experienceData[currentLang] || experienceData.en;
  experiencesList.innerHTML = "";
  items.forEach((experience) => {
    const galleryUrl = experience.gallerySlug
      ? `gallery.html?item=${encodeURIComponent(experience.gallerySlug)}`
      : "";
    const hasActions = experience.link || experience.gallerySlug;
    const item = document.createElement("article");
    item.className = "experience-item";

    item.innerHTML = `
      <div class="experience-main">
        <h3>${experience.role}</h3>
        <p class="experience-meta">${experience.company} | ${experience.period}</p>
        <p class="experience-meta">${experience.location}</p>
        <p>${experience.summary}</p>
      </div>
      ${
        hasActions
          ? `<div class="experience-actions">
              ${
                experience.link
                  ? `<a class="btn btn-ghost" target="_blank" rel="noopener noreferrer" href="${experience.link}">${t("project_link")}</a>`
                  : ""
              }
              ${
                experience.gallerySlug
                  ? `<a class="btn btn-ghost" href="${galleryUrl}">${t("gallery_link")}</a>`
                  : ""
              }
            </div>`
          : ""
      }
    `;
    setCardGalleryBehavior(item, experience.gallerySlug);
    experiencesList.appendChild(item);
  });
};

const renderGalleryPage = () => {
  if (!galleryGrid) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const slug = (params.get("item") || "").toLowerCase();
  const gallery = galleryData[slug];

  galleryGrid.innerHTML = "";

  if (!gallery) {
    if (galleryTitle) {
      galleryTitle.textContent = t("gallery_suffix");
    }
    if (galleryMessage) {
      galleryMessage.textContent = t("gallery_not_found");
    }
    return;
  }

  const name = gallery.name[currentLang] || gallery.name.en;

  if (galleryTitle) {
    galleryTitle.textContent = `${name} ${t("gallery_suffix")}`;
  }

  if (galleryMessage) {
    galleryMessage.textContent = "";
  }

  document.title = `${name} ${t("gallery_suffix")} | Mitat Mehmet Erseker`;

  gallery.images.forEach((image) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-card";
    figure.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy" />`;
    const img = figure.querySelector("img");
    if (img) {
      img.addEventListener("click", () => openLightbox(image.src, image.alt));
    }
    galleryGrid.appendChild(figure);
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
  renderGalleryPage();
};

applyTheme(initialTheme);
applyLanguage(currentLang);
initLightbox();

const syncThemeWithSystem = (event) => {
  const savedTheme = localStorage.getItem("theme");
  if (isThemeValue(savedTheme)) {
    return;
  }
  applyTheme(event.matches ? "dark" : "light");
};

if (themeMediaQuery.addEventListener) {
  themeMediaQuery.addEventListener("change", syncThemeWithSystem);
} else if (themeMediaQuery.addListener) {
  themeMediaQuery.addListener(syncThemeWithSystem);
}

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
