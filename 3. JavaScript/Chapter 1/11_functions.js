//Arrrow function without parameter and return

const greeting = ()=>{
    console.log("Hello")
}
greeting()

// **********************************************************
//Arrrow function without parameter and but return something


const greeting1 = ()=>{
    return "World!"
}
// console.log( greeting1())
let result1 =  greeting1()
console.log(result1)

// **********************************************************
//Arrrow function that accept parameter and return

const sum = (p,q)=>{
    return p+q
}
console.log(sum(5,8))

// **********************************************************
//Function that accept parameter and return
let a = 10;
let b = 20;
let c = 30;


function onePlusAverage(x,y){
    let result= 1+(x+y)/2;
    return result

}

console.log("One plus average of a and b is:",  onePlusAverage(a,b))
console.log("One plus average of b and c is:",  onePlusAverage(b,c))
console.log("One plus average of c and a is:",  onePlusAverage(c,a))


//Higher Order Function
//Function that return function called higher order function


function buyMilk(money){
    return Math.floor(money/1.5)
    
}

console.log(buyMilk(5))
