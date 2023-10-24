//while loop - the programe will run till the condition become false

let prompt = require("prompt-sync")()

let i = prompt("Please enter the value: ")



while (i<5){
    console.log(i)
    i++
}



// Do while - this programe will run atleast 1 time as "do" block will run then "while" condition will be check. If it's true then again above block will run untill the condition become false

i = prompt("Please enter the value: ") //reseting i value


do{
    console.log(i)
    i++
}while(i<5)


