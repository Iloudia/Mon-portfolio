const PROJECTS = {
  "sophie-bluel": {
    title: "Sophie Bluel – Architecte",
    github: "https://github.com/Iloudia/Projet6-Sophiebluel",
    site: "https://github.com/Iloudia/Projet6-Sophiebluel.git",
    image: "/src/assets/sophiebluel2_.webp",
    alt: "Aperçu du projet Sophie Bluel, portfolio d’architecte en JavaScript",
    description: "J’ai développé le portfolio d’une architecte avec une galerie filtrable et un espace administrateur permettant de gérer les travaux via une API",
    skills: [
      "Manipulation du DOM et filtrage",
      "Appels API REST (avec fetch)",
      "Formulaires + upload de fichier",
      "Gestion modale",
      "Séparation Front/Back et organisation"
    ]
  },
  "ohmyfood": {
    title: "Ohmyfood",
    github: "https://github.com/Iloudia/Ohmyfood",
    site: "https://iloudia.github.io/Ohmyfood/",
    image: "/src/assets/Ohmyfood_.webp",
    alt: "Aperçu du projet Ohmyfood, site mobile-first pour menus de restaurants",
    description: "J’ai conçu un site mobile-first qui présente les menus de restaurants, en utilisant Sass pour l’intégration et des animations CSS pour l’interactivité, le tout sans recourir à JavaScript afin de me concentrer sur l'interface utilisateur.",
    skills: [
      "Intégration mobile-first",
      "Sass",
      "Animations CSS",
      "Sémantique HTML et méthode BEM",
      "Responsive"
    ]
  },
  "nina-carducci": {
    title: "Nina Carducci – Photographe",
    github: "https://github.com/Iloudia/Nina-Carducci---Photographe",
    site: "https://iloudia.github.io/Nina-Carducci---Photographe/",
    image: "/src/assets/Ninacarducci2_.webp",
    alt: "Aperçu du projet Nina Carducci, optimisation SEO d’un site de photographe",
    description: "J’ai travaillé sur l’optimisation d’un site déjà en ligne en améliorant son référencement, ses performances et son accessibilité, notamment grâce à des audits Lighthouse et à l’optimisation des images et des médias.",
    skills: [
      "Audit Lighthouse",
      "Optimisation d’images et lazy-loading",
      "Balises méta",
      "Nettoyage/chargement JS et CSS",
      "Accessibilité"
    ]
  },
  "kasa": {
    title: "Kasa",
    github: "https://github.com/Iloudia/Kasa",
    site: "https://iloudia.github.io/Kasa/",
    image: "/src/assets/kasa_.webp",
    alt: "Aperçu du projet Kasa, refonte d’un site d’annonces en React et Vite",
    description: "J’ai réalisé la refonte du front-end d’un site avec React et Vite, en créant des pages d’annonces, des composants réutilisables, ainsi qu’un système de routage",
    skills: [
      "React + Vite",
      "Découpage en composants",
      "Props et état local",
      "Routing et pages 404",
      "Organisation du projet"
    ]
  },
  "724-events": {
    title: "724 Events",
    github: "https://github.com/Iloudia/Projet9-724events",
    site: "https://iloudia.github.io/Projet9-724events/",
    image: "/src/assets/724events_.webp",
    alt: "Aperçu du projet 724 Events, application React pour agence événementielle",
    description: "J’ai travaillé sur le débogage d’une application React pour une agence événementielle, en identifiant et corrigeant différents bugs tout en suivant un cahier de recette",
    skills: [
      "Debug React",
      "Gestion des props/état",
      "Correction d’erreurs d’intégration",
      "Gestion d'un cahier de recettes",
      "Lecture d’un code existant"
    ]
  },
  "portfolio": {
    title: "Création Portfolio",
    github: "https://github.com/dashboard",
    site: "#",
    image: "/src/assets/portfolio_.webp",
    alt: "Aperçu du portfolio personnel, site vitrine développé en HTML, CSS et JavaScript",
    description: "J’ai intégré ce site en HTML, CSS et JavaScript, avec des cartes projets, un design responsive et quelques micro-interactions.",
    skills: [
      "Intégration HTML/CSS",
      "Responsive simple",
      "Vanilla JS léger",
      "Organisation CSS et variables"
    ]
  }
};

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  burger.textContent = menu.classList.contains('open') ? '×' : '☰';
});

// fermer le menu lorsqu'on clique à l'exterieur 
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !burger.contains(e.target) && menu.classList.contains('open')) {
    menu.classList.remove('open');
    burger.textContent = '☰';
  }
});

// fermer le menu lorsque le menu est cliquer
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.textContent = '☰';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById("project-popup");
  const overlay = document.getElementById("project-overlay");
  const closeButton = popup.querySelector(".close-btn");

  if (!popup || !overlay) {
    console.error("Popup or overlay element not found");
    return;
  }

  function showPopup(slug) {
    const data = PROJECTS[slug];
    if (!data) {
      console.error("No project data found for slug:", slug);
      return;
    }

    const previewImage = popup.querySelector(".preview-image");
    const popupTitle = popup.querySelector(".title");
    const popupDescription = popup.querySelector(".description");
    const skillsList = popup.querySelector(".skills-list");
    const githubLink = popup.querySelector(".github-link");
    const siteLink = popup.querySelector(".project-site");

    // Remplissage des données
    previewImage.src = data.image;
    previewImage.alt = `Aperçu du projet ${data.title}`;
    popupTitle.textContent = data.title;
    popupDescription.textContent = data.description;
    skillsList.innerHTML = data.skills.map(s => `<li>${s}</li>`).join("");
    githubLink.href = data.github;
    siteLink.href = data.site;

    // Ne pas masquer le bouton "Voir le site"
    siteLink.style.display = "inline-block";

    popup.hidden = false;
    overlay.hidden = false;
    document.body.classList.add("no-scroll");
    closeButton.focus();
  }

  function hidePopup() {
    popup.hidden = true;
    overlay.hidden = true;
    document.body.classList.remove("no-scroll");
  }

  // Attacher les écouteurs d'événements aux cartes
  document.querySelectorAll(".project-card[data-project]").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".links")) return;
      const slug = card.getAttribute("data-project");
      showPopup(slug);
    });
  });


  closeButton.addEventListener("click", hidePopup);

  overlay.addEventListener("click", hidePopup);


  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !popup.hidden) hidePopup();
  });

  // animations fade-in
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.2
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});