// Primitive Data Type
// nn ss bb u

//It's often used to reset or clear a variable that previously held an object or value.
let a = 55 + 45
a = null 

let b = 23
let c = "Rahul"
let d = Symbol("I am a symbol")
let e = BigInt(56) + BigInt (24)
let f = true

//It is used to represent the absence of a value or an uninitialized variable.
//When a variable is declared but not assigned a value, it is automatically initialized with undefined.
let g = undefined 

console.log(a, b , c , d , e, f, g)

// Used to find datatype
console.log(typeof b)

// Non Primitive Data Type

let item = {
    "Rahul": 98,
    "Rohan": 55,
    "Rohit": "Absent",
    "Rushab": false,
    "Ram": undefined
}

console.log(item["Rohan"]);

