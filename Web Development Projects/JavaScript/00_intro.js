var a = "Rahul";
let b = 45
var c = null
var d = undefined

// b has "45" stored which we initialized while declaring variable b
console.log(b)


// b value changed to "Ram" in only blocked, let allow us to redclared the variable in blocked and it value only has blocked level scope
{
let b = "Ram";
console.log(b)
}

// here re reinitialized the value of b to "Rohan" and it has global scope
{
b = "Rohan";
console.log(b)
}

// now b stoed value "Rohan" even it is reinitialized in block. only redclared varibale in block has blocked level scope
console.log(b)

// we can initialized let value anywhere in our code
b = 100;
console.log(b)


// We can't declared and reinitilized the const in our code
const pi = 3.14
console.log(pi)
