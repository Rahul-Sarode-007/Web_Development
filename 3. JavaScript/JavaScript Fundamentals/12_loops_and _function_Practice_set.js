
/*******************************************************************
1.Write a program to print the marks of the student in an object using plain for loop.
********************************************************************/


let marks = {
    Rahul: 87,
    Rakesh: 97,
    Pankaj: 49,
    Ani:99
}

for(let i=0; i<Object.keys(marks).length;i++){
    console.log(`The marks of ${Object.keys(marks)[i]} is ${marks[Object.keys(marks)[i]]}`)
}


//Notes:
//1.1 This will return the object keys in the form of array. like ["Rahul, "Rajesh", "Pankaj", "Ani"]
console.log(Object.keys(marks))

//1.2 This will return the length of the array as our object keys stored in form of array.
console.log(Object.keys(marks).length)

//1.3 This will return the single key (array item) from array as our for loop iterate
//Object.keys(marks)[i]    //i = 0,1,2,3

//1.4 this will return the value of the key
// syntax: objectName[key]  -----> will return value of that key
// marks[Object.keys(marks)[i]] ---->specifically using for loop




/*******************************************************************
2. Write a above programe using for in loop.
*******************************************************************/


for (let i in marks){
    console.log(`The marks of ${i} is ${marks[i]}`)
}
 


/*******************************************************************
3. Write a program to "try again" until user enter the correct number.
*******************************************************************/

let prompt = require("prompt-sync")()

let correctNumber = 4;
let userEnteredNumber

while(userEnteredNumber != correctNumber){
    userEnteredNumber = prompt("Please enter the number: ")
    if (userEnteredNumber != correctNumber){
        console.log("try again")
    }
    else{
        console.log("Yee, You entered the correct number")
    }
}

/*******************************************************************
4. Write a function find the mean of 5 number
*******************************************************************/

//We can directly pass the values as a parameter to function and function used that values to perform certain opeartion decalred in function block.

const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}

let meanresult = mean(4,5,6,7)

console.log(`The mean is ${meanresult}`)

