//7. delete

/*Notes: 

1. delete is not a method but an operator like typeof
2. it will delete the array element from given position
3. this will modify the current array
4. the delete item postion repalced with "<1 empty item>"
5. the length of the array will not changed

*/

let num = [5, 30, 35, 45, 25, 15, 60, 22]

delete num[0]
console.log(num, num.length)


/***********************************************************/

//8. concat()

/*Notes: 
1. this method concatenate array with given parameter array.
2. it can also concatenate more than one array
3. this method does not change the existing array
4. return the concatenated array.

*/

let fruits = ["Mango", "Banana", "Apple"]

let numWithFruits =  num.concat(fruits)

console.log(numWithFruits)


/***********************************************************/

//9. sort()
/*
Notes: 
1. This method sort the array in alphabetically order.
2. We can use a compare function to modify are sorted results.
3. Here a-b (example 123-30 = 93) given the postive result so 30 comes first as 123 is bigger number, this way it acending the array element. putting the smallest number first.

4. This method change the original array
5. also return the modified array.


*/
let = numSortExample = [123, 30, 735, 245, 2, 1595]

const compare = (a,b) =>{
    return a-b
}

let a =  numSortExample.sort(compare)

console.log(numSortExample, a)


/***********************************************************/

//10. reverse()


/*
Notes:
1. This array reverse the original array.
2. This array also return the original array.

*/

let b=  numSortExample.reverse()

console.log (numSortExample, b)

/***********************************************************/

//11. splice()

/*
Notes:

1. This methode takes 3 parameters the first one in below case (2), indicate the from index (2) we are going to make changes. element 0 and 1 remian same.

2. The second parameter (3) indicate delete the three element from index (2) which we given in first parameter.

3. The last parameters are elements which we want to add, it can be one or more than one, in our case it is (1001, 1002, 1003, 1004). this element add from index (2) after deleting the three elements as mention in point 2.

4. This method return deleted elements.

5. This method modify the original array

*/


let= num3 = [5, 30, 35, 45, 25, 15, 60, 22]
let c=  num3.splice(2, 3, 1001, 1002, 1003, 1004)
console.log(num3, c)


/***********************************************************/

//12. slice()

/* 
Notes: 

1. This method slice the array from given index.
2. counting start from 0
3. include first parameter index
4. not include second parameter index
5. when second parameter not given, it will only slice the starting elements and give all remaing array elements
6. Will not modify the existing array
7. Return the slice array
*/

let d = num3.slice(3, 6)

console.log(d)

