//Global Scope

let c = 5

{   
     console.log(c)
}


const myFun2 = () =>{
    console.log(c)
}

myFun2()


console.log(c)

// ************************

//Local Scope

// block level scope
{
    let a = 8
}
console.log(a) //OUTPUT: Uncaught ReferenceError: a is not defined
// Note: 'a' has the block level scope here




 // Functional level scope
const myFun = () =>{
    let b = 10
}

console.log(b)  //Uncaught ReferenceError: b is not defined
// Note: 'b' has the functional level scope here

myFun()