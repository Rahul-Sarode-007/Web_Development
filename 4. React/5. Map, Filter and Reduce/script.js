//1. Map - Array Function
//Creating new array by doing something with each item in an array.
const numbers = [4, 12, 52, 2, 20]

function double (x){
    return x*2
}

let doubleNum = numbers.map(double)

console.log(doubleNum)


// ******************************************

//2. Filter
//Creating a new array by keeping the items that return true.

const gretherThanTen = numbers.filter(function (num){
    return num>10
})

console.log(gretherThanTen)


// ******************************************

//3. Reduce
//Accumulate a value by doing something to each item in a array.

let sum = numbers.reduce(function(num1,num2){
    // console.log(num1)
    // console.log(num2)
    return num1+num2
})

console.log(sum)

// ******************************************

// 4.Find
//Find the first item that matches from an array.

const findExample = numbers.find(function (num){
    return num > 10
})

console.log(findExample)

// ******************************************

// 5.FindIndex
//Find the index of the first item that matches.

const findIndexExample = numbers.findIndex(function (num){
    return num > 10
})

console.log(findIndexExample)

// ******************************************
// ******************************************
