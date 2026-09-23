const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalRoles = document.getElementById("modalRoles");
const modalSoftware = document.getElementById("modalSoftware");
const modalYear = document.getElementById("modalYear");

const closeBtn = document.querySelector(".close_btn");
const galleryImages = document.querySelectorAll(".image_container img");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = image.src;

    // Pull dataset attributes (or fallback to alt text if not defined)
    modalTitle.textContent = image.dataset.title || image.alt || "Untitled";
    modalRoles.textContent = image.dataset.roles || "N/A";
    modalSoftware.textContent = image.dataset.software || "N/A";
    modalYear.textContent = image.dataset.year || "N/A";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//////////////////////////

// Hamburbur Menu

const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

//////////////////////////

// Typing Animation

const typed = new Typed(".changing-text", {
  strings: ["Multimedia Artist", "Illustrator", "3D Modeler"],
  typeSpeed: 67,
  backSpeed: 67,
  backDelay: 1200,
  loop: true,
});

//////////////////////////

// Scrollspy Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-menu a");
const worksParent = document.querySelector(".works-parent");

window.onscroll = () => {
  let currentSectionId = "";

  // 1. Find which section is currently on screen
  sections.forEach((sec) => {
    const sectionTop = sec.offsetTop - 150;
    const sectionHeight = sec.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSectionId = sec.getAttribute("id");
    }
  });

  // 2. Remove active state from all links
  navLinks.forEach((link) => {
    link.classList.remove("active");

    // 3. Highlight the matching link
    if (link.getAttribute("href") === "#" + currentSectionId) {
      link.classList.add("active");
    }
  });

  // 4. If current section is a Works subcategory, also highlight "Works"
  const worksSubcategories = ["Illustrations", "3d", "Animations"];

  if (worksSubcategories.includes(currentSectionId)) {
    worksParent.classList.add("active");
  }
};
