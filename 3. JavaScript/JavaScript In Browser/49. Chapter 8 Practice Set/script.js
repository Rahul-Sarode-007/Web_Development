//1. Write a program to show different alerts when different buttons are clicked.

let button1 = document.querySelector(".btn1")

button1.addEventListener("click", () => {
    alert("You Pressed Button 1")
})

let button2 = document.querySelector(".btn2")

button2.addEventListener("click", () => {
    alert("You Pressed Button 2")
})


//2. Create a website which is capable of storing bookmarks of your favorite websites using href

let myLI = document.querySelector("li a")

myLI.addEventListener("mouseenter", function (e) {
    let b = e.target
    console.log(b.getAttribute("href"))

    myP = document.querySelector("p")

    myP.innerHTML = myP.innerHTML + b.getAttribute('href')

})

