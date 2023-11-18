/*
Error Object has three properties

1.name - gives the name of the error
2.message - tell about the error
3.stack - it gives both error name and message
*/

//Error Object Properties
try {
    rahul
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}


//Throwing custom reference error
try {
    throw new ReferenceError ("simulating_error")
} catch (error) {
    console.log(error)
}



/*
Custom Error
1. We are throw custom error and also catch it.
*/
let age = prompt("Please enter your age")
age = Number.parseInt(age)
console.log(typeof age)

if(age<1 || age>130){
    try {
        throw new ReferenceError("Invalid_age")
    } catch (error) {
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
    }
}
else if(age<18){
    console.log("You are teenager")
}
else if(age>18){
    console.log("You are adult")
}