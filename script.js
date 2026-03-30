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
      "I am a senior Computer Science and Engineering student at Sabancı University with a strong interest in artificial intelligence, machine learning, and software development. I enjoy working on projects that combine theoretical understanding with practical implementation, especially in areas related to intelligent systems and real-world problem solving. Through my academic and project experience, I have developed a solid foundation in building reliable software and exploring data-driven approaches to complex problems. I am particularly motivated to continue growing in research-oriented and technically challenging environments.",
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
    footer_last_updated: "Last updated:",
    theme_light: "Light",
    theme_dark: "Dark",
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
      "Sabancı Üniversitesi Bilgisayar Bilimi ve Mühendisliği bölümünde son sınıf öğrencisiyim. Yapay zeka, makine öğrenimi, ve yazılım geliştirme alanlarına büyük ilgi duyuyorum. Özellikle akıllı sistemler ve gerçek dünyadaki problemlerin çözümü ile ilgili alanlarda, teorik bilgiyi pratik uygulamayla birleştiren projelerde çalışmaktan keyif alıyorum. Akademik ve proje deneyimlerim sayesinde, güvenilir yazılımlar geliştirme ve karmaşık problemlere veri odaklı yaklaşımlar bulma konusunda sağlam bir temel oluşturdum. Araştırma odaklı ve teknik açıdan zorlu ortamlarda kendimi geliştirmeye devam etmek konusunda özellikle motivasyonluyum.",
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
    footer_last_updated: "Son güncelleme:",
    theme_light: "Açık",
    theme_dark: "Koyu",
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
const lastUpdatedEl = document.getElementById("lastUpdated");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const GITHUB_OWNER = "MehmetErseker";
const GITHUB_REPO = "MehmetErseker.github.io";
const GITHUB_BRANCH = "main";
const FALLBACK_LAST_UPDATED_ISO = "2026-03-18";
let latestUpdatedISO = FALLBACK_LAST_UPDATED_ISO;

const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const isThemeValue = (value) => value === "light" || value === "dark";
const getSystemTheme = () => (themeMediaQuery.matches ? "dark" : "light");

const storedTheme = localStorage.getItem("theme");
const initialTheme = isThemeValue(storedTheme) ? storedTheme : getSystemTheme();

const storedLang = localStorage.getItem("lang");
let currentLang = storedLang === "tr" ? "tr" : "en";

const t = (key) => translations[currentLang][key] || key;

const updateLastUpdated = () => {
  if (!lastUpdatedEl) {
    return;
  }

  const locale = currentLang === "tr" ? "tr-TR" : "en-US";
  const parsedDate = new Date(latestUpdatedISO);

  if (Number.isNaN(parsedDate.getTime())) {
    lastUpdatedEl.textContent = FALLBACK_LAST_UPDATED_ISO;
    lastUpdatedEl.setAttribute("datetime", FALLBACK_LAST_UPDATED_ISO);
    return;
  }

  lastUpdatedEl.textContent = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(parsedDate);
  const dateOnly = parsedDate.toISOString().slice(0, 10);
  lastUpdatedEl.setAttribute("datetime", dateOnly);
};

const fetchLastCommitDate = async () => {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/commits?sha=${encodeURIComponent(GITHUB_BRANCH)}&per_page=1`;

  try {
    const response = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok) {
      return;
    }

    const commits = await response.json();
    const commitDate = commits?.[0]?.commit?.committer?.date;
    if (!commitDate) {
      return;
    }

    latestUpdatedISO = commitDate;
    updateLastUpdated();
  } catch (_error) {
    // Keep fallback date when the API is unavailable.
  }
};

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
  updateLastUpdated();
};

applyTheme(initialTheme);
applyLanguage(currentLang);
initLightbox();
void fetchLastCommitDate();

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
