//Desktop scroll effect
const navBar = document.querySelector(".nav-bar");

const navAnimation = () =>{
  if (window.screen.width > 768) {
    if (window.scrollY > 1) {
      navBar.style.height = "4rem";
      navBar.classList.add("sticky-bg");
    } else {
      navBar.style.height = "6rem";
      navBar.classList.remove("sticky-bg");

    }
  }
}
window.addEventListener("scroll", navAnimation);


// *********************************************
//Mobile menu-bar icon animation (X)
function toggleMobileMenu() {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  mobileMenuIcon.classList.toggle("open");
}

// Open mobile menu when icon is clicked
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
// const navBar = document.querySelector(".nav-bar")

mobileMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("down-nav-bar");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    mobileMenuIcon.classList.remove("open");

    navBar.classList.remove("down-nav-bar");
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
let allowTypingAnimation = true;

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
      
  },100)
}


const eraseSubtitle = (subtitle)=>{
  let currentIndex = subtitleElement.textContent.length
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
  },50)

}

const updateSubtite = (currentSubtitleIndex) =>{
  typeSubtitle(subtitles[currentSubtitleIndex])
  if (allowTypingAnimation) {
  }
}
updateSubtite(currentSubtitleIndex)


// Check scroll position and disable typing animation if scrolled past 1000px
window.addEventListener("scroll", () => {
  if (window.scrollY < 10) {
    console.log(window.scrollY)
    allowTypingAnimation = true;

  }
  if(window.scrollY > 10){
    // console.log(window.screen.height)

    allowTypingAnimation = false

  }
});



// **********************************

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", handleScroll);
});

function handleScroll() {
  const scrollPosition = window.scrollY;

  // Check if the user has scrolled more than 900 pixels
  if (scrollPosition > 600) {
    animateProgressBar("html-progress", 80);
    animateProgressBar("css-progress", 75);
    animateProgressBar("js-progress", 85);

    // Remove the event listener to avoid unnecessary animations
    window.removeEventListener("scroll", handleScroll);
  }
}

function animateProgressBar(id, percentage) {
  const progressBar = document.getElementById(id);
  progressBar.style.width = percentage + "%";
}



// *********************************************************

// let cardfront1 = document.querySelector(".card-1-front");
// let cardBack1 = document.querySelector(".card-1-back");


// cardfront1.addEventListener("mouseenter", () => {
//     cardBack1.classList.add("card-1-back-js");
// });


// cardfront1.addEventListener("mouseleave", () => {
//     cardBack1.classList.remove("card-1-back-js");
// });

// *************

let cardBack2 = document.querySelector(".card-2-back");
let cardfront2 = document.querySelector(".card-2-front");


cardfront2.addEventListener("mouseenter", () => {
    cardBack2.classList.add("card-1-back-js");
});


cardfront2.addEventListener("mouseleave", () => {
    cardBack2.classList.remove("card-1-back-js");
});
// *************

let cardBack3 = document.querySelector(".card-3-back");
let cardfront3 = document.querySelector(".card-3-front");

cardfront3.addEventListener("mouseenter", () => {
    cardBack3.classList.add("card-1-back-js");
});


cardfront3.addEventListener("mouseleave", () => {
    cardBack3.classList.remove("card-1-back-js");
});

// *******************************
// Experience section

// experienceSection = document.querySelector("#project").offsetHeight;

// projectSection = document.querySelector(".black").style.marginTop = experienceSection/2 +"px";


// *******************************
// Get the video element
// var myVideo = document.querySelector(".project-1-video");

// // Function to start the video
// function startVideo() {
//   myVideo.play();
// }

// // Function to pause the video
// function pauseVideo() {
//   myVideo.pause();
// }





