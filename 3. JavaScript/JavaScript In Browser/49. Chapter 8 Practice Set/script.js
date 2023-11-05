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

let myLI = document.querySelectorAll("li a")
for (let i=0; i<myLI.length; i++){
    myLI[i].addEventListener("click", function (e) {
        let b = e.target
        console.log(b.getAttribute("href"))

        myP = document.querySelector("p")
        
        myP.innerHTML =" Your Favorite Website bookmark is: " + b.getAttribute('href')
    
    })
    
}


//5. Crete a glowing bulb effect using classic toggle method in javaScript

const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500", "#FF1493"];
let currentIndex = 0;


    let effect = () =>{
        let light = document.querySelector(".circle")
    
        // light.classList.toggle("lighton")
        if (currentIndex <=7){

            currentIndex +=1
        }
        else{
            currentIndex = 0
        }
        light.style.background = colors[currentIndex]
        // console.log(currentIndex)
    }
        



let mySwitch = document.querySelector(".switch")
setInterval(effect,100)


mySwitch.addEventListener("click", effect)

//6. Print 0 to 4 every 1 second
for (let i = 0; i< 5; i++){

    let numPrint =  () => {
        console.log("Count Using Set Timeout function ",i)
    }

    setTimeout(numPrint, i*1000)
}



let count = 0
let setIntervalExample = () =>{
    if (count < 5){
        console.log("Count Using Set Interval function ",count)
    }
    count +=1
}

setInterval (setIntervalExample,1000)