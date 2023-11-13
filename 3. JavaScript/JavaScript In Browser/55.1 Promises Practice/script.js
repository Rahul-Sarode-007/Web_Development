//Callback Hell or Pyramid of Doom


//Add
function add (a, b, callback)  {
    const result = a + b;
    callback(result);
};

//Minus
function minus (a, b, callback)  {
    const result = a - b;
    callback(result);
};

//Multipy
function multi (a, b, callback)  {
    const result = a * b;
    callback(result);
};

//Divide
function divide (a, b, callback)  {
    const result = a / b;
    callback(result);
};



//Callback Hell or Pyramid of Doom
add(5, 3, function handleSum(sum) {
    console.log(sum)
    minus(sum,2,function handleDiff(diff){
        console.log(diff)
        multi(diff,2,function handleMultipy(mul){
            console.log(mul)
            divide(mul,3,function handleDivision(div){
                console.log(div)
            })
        })
    })
})


/*******************************************************************************************************************************************************/


/*
Solving same problem with promises
*/

console.log("Using Promises")


const add1 = (a, b) => {
    // Returning a Promise object to the 'add1' function
    return new Promise((resolve, reject) => {
        const result = a + b;
        resolve(result);
    });
}

const minus1 = (a, b) => {
    // Returning a Promise object to the 'minus1' function
    return new Promise((resolve, reject) => {
        const result = a - b;
        resolve(result);
    });
}


const multi1 = (a,b)=>{
    // Returning a Promise object to the 'multi1' function
    return new Promise((resolve,reject)=>{
        const result = a*b
        resolve(result)
    })
}


const divid1 = (a,b) =>{
    // Returning a Promise object to the 'divid1' function
    return new Promise((resolve,reject)=>{
        const result = a/b
        resolve(result)
    })
}



//Calling add1 function
add1(5, 3)

// Using the 'then' method to retrieve the resolved value from the promise object returned by 'add1'
.then((sum) => {
    console.log(sum);

    // Calling function "minus1"
    // Giving the resolved value 'sum' to the next function 'minus1'
    return minus1(sum, 2);
    // Passing the promise object returned by 'minus1' to the next 'then' block.
})


// Using the 'then' method to retrieve the resolved value from the promise object returned by 'minus1'
.then((diff) => {
    console.log(diff);
    return multi1(diff,2)
})

.then((mul)=>{
    console.log(mul)
    return divid1(mul,3)
})

.then((diff)=>{
    console.log(diff)
})





