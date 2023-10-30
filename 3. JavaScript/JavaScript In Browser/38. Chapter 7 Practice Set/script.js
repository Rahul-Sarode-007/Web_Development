//Chapter 7 Practice Set
//Q.1: Create a navbar and change the color of it's first element to red
document.querySelectorAll(".navbar-items a")[0].style.color = "red"

//OR
document.querySelector(".navbar-items a").style.color = "red"

//OR
document.getElementById("navbar").firstElementChild.firstElementChild.firstElementChild.style.color = "red"

//OR

document.getElementsByClassName("navbar")[0].firstElementChild.firstElementChild.firstElementChild.style.color = "red"



//Q.3 Create an element with three children. Now change the color of first and last children to green
document.querySelector("a.project-1").style.color = "red"
document.querySelector("a.project-3").style.color = "red"


//OR

document.querySelectorAll("a.project-1")[0].style.color = "green"
document.querySelectorAll("a.project-3")[0].style.color = "green"


//Q.4 Write javaScript code to change the background of all <li> tags to cyan.

let navbarListItems = document.querySelectorAll(".navbar-items")


for(let i=0; i<navbarListItems.length; i++){
    navbarListItems[i].style.background = "cyan"
}

//OR - using forEach method
//first we need to convert the HTML collection to array to use array method.
navbarListItems = Array.from(navbarListItems)

navbarListItems.forEach((element) =>{
    element.style.background = "blue"
})



/*Q.5 Which is the following is used to look for the farthest anchestor that matches a given CSS selector
a.matches     b.closest       3.contains      d.none of the above
(d.none of the above-correct: as none of us give us farthest anchestor, below method give us closest anchestor) */

let hireClass = document.querySelector(".hire-me")
console.log(hireClass.closest(".navbar"))

