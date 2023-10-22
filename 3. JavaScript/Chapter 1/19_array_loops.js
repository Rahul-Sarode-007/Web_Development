let num = [4, 7, 1, 5, 2]

/*1. Classic for loop
Notes: 1. This is a classic for loop
*/
for (let i = 0; i<num.length; i++){
    console.log(num[i])
}


/*
2. forEach()
Notes: 1. This method accept the callback function and loop through the array.
2. loop through the array till items present in array.
3. can modify the behaviour of the callback function within the forEach loop, like we did below element*element. will give us squre root of that element.
*/


num.forEach((element)=>{
    console.log(element*element)
})



/*
3. Array.from
Notes: 1. this method craetes the array from given string or HTML collection.
2. Does not change the original string or HTML collection.
3. Return the array which created from string or HTML collection.
*/
let fname = "Rahul"
let arr = Array.from(fname)
console.log(arr)

console.log(fname)


/*
4. for...of
Notes:1. for...of is the short and simplied way of writing for loop.
2. This loop will run till the elements present in array.
3. this replace the classic for loop which is -for(let i=0; i<num.legth; i++)
*/

for (let i of num){
    console.log(i)
}


/*
5. for...in
Notes:1. This loop will gives the index(key) of the array.
*/

for (let i in num){
    console.log(i)
}