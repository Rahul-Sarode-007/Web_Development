//Destructuring Assignment

let arr = [3, 5]
let [a,b] = arr
console.log(a,b) // output: 3 5



let arr1 = [4,6,25,75]
let [c,d,...rest] = arr1
console.log(c,d,rest)   // output: 4 6 [25, 75]



let arr2 = [34, 24, 64, 74, 73, 27]
let [e,,,f,...rest1] = arr2 //Note: We asked to skip 2nd and 3rd item
console.log(e,f,rest1)  //output: 34 74 [73, 27] 



let arr3 = [a,b,c,d,e,f] //all the above values we retreive using destructuring array.
console.log(arr3)   //output: [3, 5, 4, 6, 34, 74]



//Destructuring Object
let {h,i} = {h:4,i:5}
console.log(h,i)    //output: 4 5


// **************************************************


//Spread Opeartor
let arr4 = [3, 6, 7]
let obj4 = {...arr4}
console.log(obj4)   //output: {0: 3, 1: 6, 2: 7}



// pasing the array value 43, 4 and 26 to arrow function sum
let arr5 = [43, 4, 26];
let sum = (v1,v2,v3)=>{
    console.log(v1+v2+v3)
}
sum(...arr5);



//Can use IIFE too.
((v1,v2,v3)=>{
    console.log(v1+v2+v3)
})(...arr5)     //output 73 
// Note: pasing the array value 43, 4 and 26 to IIFE which sums the vales


let obj2 = {
    name: "Rahul",
    company: "Station Satcom",
    address: "Vashi"
};

// console.log({...obj2, company:"Rudra", address:"BKC"});

// this create the new object but does not modify the original object
let obj3= {...obj2, company:"Rudra", address:"BKC"}

console.log(obj2)//original vales are same //output: {name: 'Rahul', company: 'Station Satcom', address: 'Vashi'}

console.log(obj3)   //output: {name: 'Rahul', company: 'Rudra', address: 'BKC'}