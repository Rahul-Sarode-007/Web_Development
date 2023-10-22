/*
1. forEach()
Notes: 1. This method accept three parameters, value, index and array
2. This method accept the callback function and loop through the array.
3. loop through the array till items present in array.
4. can modify the behaviour of the callback function within the forEach loop, like we did below element*element. will give us squre root of that element.
5. this does not modify the array nor return any value or array. 
*/

let arr = [23, 16, 56, 73, 22]
let a
a = arr.forEach((value)=>{
    console.log(value+value)
})

console.log(arr, a)


/*
2. map()
Notes: 1. map methods also go through each element of array.
2. also accept there paramater value, index and array
3. does not change the original array.
4. unlike forEach, map method return the new array
*/

let arr2 = [58, 24, 83, 29, 17]
let a2
a2 = arr2.map((value,index, array)=>{
    return value + 5
})

console.log(arr2, a2)


/*
3.filter()
Notes: 1. This method compare the element with the given value if this true then add that values in new array.
2. Return the new array
3. Does not modify the original array
*/

let arr3 = [34, 62, 9, 59, 4, 29, 58, 6]

let a3
a3 = arr3.filter((element)=>{
    return element<10
})

console.log(arr3, a3)


/*
4. reduce()
Notes: This method reduce the array to a single value by performing the operation we mentioned in the reduce callback fuction.
2. Does not modify the original array.
3. Return the single value after performing the given value.
*/

let arr4 = [1, 2, 3, 4, 5]
let a4

a4 = arr4.reduce((num1, num2)=>{
    return num1+ num2
})

console.log(arr4, a4)

//can write the separate function and pass the function name as callback fuction

let arr5 = [1, 2, 3, 4, 5]
let a5

const sum = (a,b)=>{
    return a+b
}

a5 = arr5.reduce(sum)

console.log(arr5, a5)
