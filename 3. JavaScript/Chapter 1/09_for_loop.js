let prompt = require("prompt-sync")();

let num = prompt("Please enter the number: ")

let sum = 1
//Factorial program
for (let i=1; i<=num; i++){
    console.log(sum + "*" + i + "=" + (sum*=i))

}
console.log(sum)



let obj = {
    Rahul : 89,
    Rohan : 57,
    Priya : 90,
    Subha : 71
}

//for in: will return the key from the object
for (let i in obj){
    console.log(i + " got: " + obj[i])
}


//for of: object need to be iterative, return value

for (let i of "Rahul"){
    console.log(i)
}