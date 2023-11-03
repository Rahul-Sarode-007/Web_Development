//Selecting the element
let btn = document.querySelector("button")

//Creating the function
let byeAlertFunction = ()=>{
    alert("bye")
}

//apply addEventListener() method on selected element
//accept two parameter 1. event in quotes 2.function or function refernce like we created (addEventListener) without quotes
btn.addEventListener("click", byeAlertFunction)

//Taking user input based on which we decides, shall we show alert to user or not
let userChoice =  prompt("Wanna remove event listener, y/n: ")

if (userChoice == "y"){
    //to remove the added function need to pass the function refernce only, same function also interpreted as new function
    btn.removeEventListener("click", byeAlertFunction)
}


/*The Event Object
The Event object provide diffrent event properties which we can access as per our requirment.
*/

let consoleFunction = document.querySelector("h1")

consoleFunction.addEventListener("click", function (event){
    console.log(event.target)
    console.log(event.x, event.y)
    console.log(event)

})

