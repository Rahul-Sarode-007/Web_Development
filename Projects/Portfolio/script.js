let btn = document.querySelector(".card-1-btn");
let cardfront1 = document.querySelector(".card-1-front");
let cardBack1 = document.querySelector(".card-1-back");


cardfront1.addEventListener("mouseover", () => {
    cardBack1.classList.toggle("card-1-back-js");
});


cardfront1.addEventListener("mouseout", () => {
    cardBack1.classList.remove("card-1-back-js");
});

// *************
let btn2 = document.querySelector(".card-2-btn");
let cardBack2 = document.querySelector(".card-2-back");
let cardfront2 = document.querySelector(".card-2-front");


cardfront2.addEventListener("mouseover", () => {
    cardBack2.classList.toggle("card-1-back-js");
});


cardfront2.addEventListener("mouseout", () => {
    cardBack2.classList.remove("card-1-back-js");
});
// *************
let btn3 = document.querySelector(".card-3-btn");
let cardBack3 = document.querySelector(".card-3-back");
let cardfront3 = document.querySelector(".card-3-front");

cardfront3.addEventListener("mouseover", () => {
    cardBack3.classList.toggle("card-1-back-js");
});


cardfront3.addEventListener("mouseout", () => {
    cardBack3.classList.remove("card-1-back-js");
});

// *******************************
// Experience section

// experienceSection = document.querySelector("#project").offsetHeight;

// projectSection = document.querySelector(".black").style.marginTop = experienceSection/2 +"px";


// *******************************
// Get the video element
var myVideo = document.querySelector(".project-1-video");

// Function to start the video
function startVideo() {
  myVideo.play();
}

// Function to pause the video
function pauseVideo() {
  myVideo.pause();
}
