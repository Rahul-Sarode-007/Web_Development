//Desktop scroll effect
window.addEventListener("scroll", function () {
  const navBar = document.querySelector(".nav-bar");
  if (window.screen.width > 768) {
    if (window.scrollY > 1) {
      navBar.style.height = "4rem";
      navBar.classList.add("transparent-bg");
    } else {
      navBar.style.height = "6rem";
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


// *************************************

//Tying Subtitle Effect

const subtitles = [
  "Frontend Developer",
  "UI/UX Enthusiast",
  "Software Engineer",
  "Life Long Learner"
];

let currentSubtitleIndex = 0

const subtitleElement = document.querySelector(".subtitle h2")
let cursor =  document.querySelector(".cursor")
cursor = cursor.textContent

const typeSubtitle = (subtitle) =>{
  currentIndex = 0
  const typingSubtitle = setInterval(()=>{
      subtitleElement.textContent = subtitle.substring(0,currentIndex) + cursor;
      currentIndex ++

      if (currentIndex > subtitle.length){
          clearInterval(typingSubtitle)
          setTimeout(()=>{
            eraseSubtitle(subtitle)
          },1000)
      }
      
  },120)
}


const eraseSubtitle = (subtitle)=>{
  let currentIndex = subtitle.length
  // console.log(currentIndex)

  const erasingSubtitle = setInterval(()=>{
      subtitleElement.textContent = subtitle.substring(0,currentIndex) + cursor;
      currentIndex --
      // console.log(currentIndex)

      if (currentIndex === 0){
          clearInterval(erasingSubtitle)

          if (currentSubtitleIndex === subtitles.length-1){
          currentSubtitleIndex = 0
          } 
          else{
              currentSubtitleIndex = currentSubtitleIndex + 1
              // console.log(currentSubtitleIndex, (subtitles.length-1))
          }

          updateSubtite(currentSubtitleIndex)
      }
  },70)

}

const updateSubtite = (currentSubtitleIndex) =>{
  typeSubtitle(subtitles[currentSubtitleIndex])
}

updateSubtite(currentSubtitleIndex)
