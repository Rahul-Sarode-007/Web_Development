let ratingBoxes = document.querySelectorAll(".rating-digits div");

ratingBoxes.forEach((ratingBox, index, array) => {
  const selectedRatingBox = (e) => {
    ratingBoxes.forEach((resetColor) => {
      resetColor.style.background = "#262f38";
    });

    console.log(e.target.innerHTML);
    ratingBox.style.background = "grey";
    ratingBox.style.color = "white";
  };

  const addHoverClass = () => {
    ratingBox.classList.add("selected");
    console.log("hi");
  };

  ratingBox.addEventListener("mouseover", addHoverClass);
  ratingBox.addEventListener("click", selectedRatingBox);
});




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
