/* Write a function "transformArray" that takes an array of numbers and a callback function. The function should apply the callback to each element of the array and return a new array with the transformed values.
 */

let arr = [4, 6, 3, 8, 1];
let arr1 = []
let newNum 

//function transformArray
const transformArray = (arr,mycallback) =>{
    arr.forEach(element =>{
        mycallback(element)
    })

    return arr1
}

//fuction mycallback
const addTen = (num) =>{
    newNum = num + 10
    arr1.push(newNum)
}

const addtwenty= (num) =>{
    newNum = num + 20
    arr1.push(newNum)
}

let changedArray =  transformArray(arr,addTen);

//Transfored Array
console.log(changedArray)




//Quetion 2


const operations = (opr, n1,n2) =>{
    return opr(n1,n2)

}

const sum = (num1,num2) =>{
    return num1+num2
}

const minus = (num1,num2) =>{
    return num1-num2

}

console.log(operations(sum,10,20))
console.log(operations(minus,10,20))





/******************************************************************* */
// //Using Map function

// // Array of numbers
// let arr = [4, 6, 3, 8, 1];

// // Array to store transformed values
// // let arr1 = [];

// // Callback function to transform array elements by adding 10
// const addTen = (num) => {
//     return num + 10;
// }

// // Callback function to transform array elements by adding 20
// const addTwenty = (num) => {
//     return num + 20;
// }

// // Function to transform array using a callback
// const transformArray = (arr, myCallback) => {
//     return arr.map(myCallback);
// }

// // Transforming array by adding 10 to each element
// let changedArray = transformArray(arr, addTen);
// console.log(changedArray);

// // Transforming array by adding 20 to each element
// changedArray = transformArray(arr, addTwenty);
// console.log(changedArray);

