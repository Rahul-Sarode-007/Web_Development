//Array Methods

//1. toString()

let num = [15, 30, 45, 60, 75, 90] 
let num1 = num.toString() // return new array, does not modify existing array

console.log(num1, " Data Type:",typeof num1)

//2. join()
let num2 = num.join("_") // join all the array element using given separator, return new array, does not modify existing array
console.log(num2, " Data Type:",typeof num2)

//3. pop()

let num6 = num.pop()   // removes the last element from the array and return removed element
console.log(num, "Return:", num6) 


//4. push()

let num3 = num.push(20)  // add an element at end of the array and return length of the array
console.log(num, "Return:", num3)


//5. shift()

let num4= num.shift()  // removes the first element from the array and and return removed element
console.log(num, "Return:", num4)

//unshift()

let num5 = num.unshift(10)  // add an element at start of the array and return length of the array
console.log(num, "Return:", num5)