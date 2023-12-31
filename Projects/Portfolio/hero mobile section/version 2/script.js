//Desktop scroll effect
window.addEventListener("scroll", function () {
  const navBar = document.querySelector(".nav-bar");
  if (window.screen.width > 768) {
    if (window.scrollY > 5) {
      navBar.style.padding = "1rem";
      navBar.classList.add("transparent-bg");
    } else {
      navBar.style.padding = "2rem";
      navBar.classList.remove("transparent-bg");
    }
  }
});


//Mobile menu-bar icon animation (X)
function toggleMobileMenu() {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  mobileMenuIcon.classList.toggle("open");
}


// Open mobile menu when icon is clicked
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const heroSection = document.querySelector(".hero-section");

mobileMenuIcon.addEventListener("click", () => {
  heroSection.classList.toggle("down-hero-section");
});


// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
      const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
      mobileMenuIcon.classList.remove("open");

      heroSection.classList.remove("down-hero-section");
  });
});