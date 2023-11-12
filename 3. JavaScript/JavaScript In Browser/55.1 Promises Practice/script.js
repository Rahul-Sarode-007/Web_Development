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