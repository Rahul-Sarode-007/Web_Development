//Rating Click

let ratingBoxes = document.querySelectorAll(".rating-digits div");
let ratingDigit


ratingBoxes.forEach((ratingBox, index, array) => {
  const selectedRatingBox = (e) => {
    ratingBoxes.forEach((resetColor) => {
      resetColor.style.background = "#262f38";
      resetColor.style.color = "#757c87";

    });

    // console.log(e.target.innerHTML);
    ratingBox.style.background = "grey";
    ratingBox.style.color = "white";
    ratingDigit = e.target.innerHTML

    //Back-Side
    let ratingMessage = document.querySelector(".back-side-given-rating p")
    ratingMessage.innerHTML = `You selected ${ratingDigit} out of 5`
  };

  const addHoverClass = () => {
    ratingBox.classList.add("selected");
  };

  ratingBox.addEventListener("mouseover", addHoverClass);
  ratingBox.addEventListener("click", selectedRatingBox);
});





// ***************************************************************


//Button Click

let ratingSubmitButton = document.querySelector(".front-side-button")

const submitRating = () =>{
  let frontSide = document.querySelector(".front-side-container")
  frontSide.style.zIndex = "-1"
}

ratingSubmitButton.addEventListener("click", submitRating)








// ************************************************************



//Tried different approch too

// const selectedRatingBox = (e) => {
//     ratingBoxes.forEach((resetColor)=>{
//         resetColor.style.background = "#262f38"
//         resetColor.style.color = "black"

//     })

//     console.log(e.target.innerHTML, index)
//     let boxindex = e.target.innerHTML
//     boxindex = Number.parseInt(boxindex)

//     if (boxindex == (index+1)){
//         ratingBox.style.background = "grey"
//         ratingBox.style.color = "white"
//     }

// }

