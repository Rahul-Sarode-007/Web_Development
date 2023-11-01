/*
1.We can add, remove and toggle the class.
2. This help us to seperate the CSS from our JS
*/

document.querySelector(".btn").classList.add("invisible")

document.querySelector(".btn").classList.remove("invisible")

document.querySelector("#title").classList.toggle("huge")


//replace entire class string
document.querySelector("#title").className = "red text-color-white"


//Return boolean based on if the class present in selected element
console.log(document.querySelector("#title").classList.contains("red"))

