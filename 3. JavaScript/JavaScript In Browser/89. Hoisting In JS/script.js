// Hoisting


greet() //Here we are calling the function before initialization, But still the code is running without error, cause of hoisting
function greet(){
    console.log("Good Morning")
}

console.log(a) //OUTPUT: Undefinded - cause of hoisting even before declaring the varibale 'a' we are console logging, but it is not giving 'not declartion error' cause of hoisting


var a = 9;
console.log(a) //OUTPUT: 9 - initialized value will give only when code reach to 'a'


// *******************************************

// Hoisting not work with let, const, function expersion and class expersion

console.log(b) //OUTPUT:  Cannot access 'b' before initialization

let b = 4


myfun() //Cannot access 'myfun' before initialization
const myfun = function(){
    console.log("Hello")    
}