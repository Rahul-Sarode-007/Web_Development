//We can write the function in two way by using arrow function or by using classic function
//1. setTimeout
let a = setTimeout(function () {        //classic function
    alert("I am Rahul")
},5000)


let b = prompt("Do you want to clear the time out function, y/n: ")


if (b == "y"){
    clearTimeout(a)
}

console.log(a)

//we can also write a seperate function and pass the finction name, delay and function arrgument to a setTimeout method, like below way.

const sum = (num1, num2, num3) =>{            //Arrow Function
    return console.log(num1 + num2 + num3)
    
}

setTimeout(sum,5000, 4,5,3)



//2. setInterval

//set interval run the same task to infinite number of time until clearInterval method is given.

let myPromptFunction = function () {
    let userConfirmation =  confirm("do you want to again see this promt window after 3 second")
   if(!userConfirmation){
       clearInterval(interval)
   }
}

let interval = setInterval(myPromptFunction, 3000)

