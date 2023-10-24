//Q.1 Create an array of number and take input from the user to add number to this array.

let prompt = require("prompt-sync")()

let arr = [10, 34, 40, 25, 32, 70, 2]
let user_input

user_input = prompt("Please enter the number to add into the array: ")
user_input = Number.parseInt(user_input)
arr.push(user_input)

console.log(arr, typeof user_input)
console.log("***********************************************************")


//2. Keep adding numbers to the array in question 1's array until zero is added to the array.

while(user_input != 0) {
    user_input = prompt("Please enter the number to add into the array: ")
    user_input = Number.parseInt(user_input)
    arr.push(user_input)
} 

console.log(arr, typeof user_input)
console.log("***********************************************************")


//Q.3 Filter the number which are divisibe from 10 from the above array.

let a2

a2 = arr.filter((element) =>{
    return element % 10 == 0
})

console.log(arr, a2)

console.log("***********************************************************")


//Q.4 Find the squre root of above array element
let a3
a3 = arr.map((value)=>{
    console.log(`Squre root of ${value} is ${value*value}`)
    return value * value
})

console.log(a3)

console.log("***********************************************************")

//Q.5 find the factorial on above array using reduce methode.

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let a4

a4 = arr4.reduce((num1, num2)=>{
    return num1 * num2
})


console.log(a4)

