//1. Use a logical operator to find out the age of a person lies between 10 and 20?

let prompt = require("prompt-sync")();

let age = prompt("Please enter your age: ");

if(age>=10 && age<=20){
    console.log("Your age lies between 10 and 20")
}
else{
    console.log("Your age doesn't lies between 10 and 20")
}


//2. Demonstrate the use case of switch case statement in javaScript

let letter = prompt("Please enter the capital letter: ");

switch (letter) {
    case "A":
        console.log("Apple")
        break;
    case "B":
        console.log("Ball");
        break;
    case "C":
        console.log("Cat");
        break;
    case "D":
        console.log("Dog")
        break;
    default:
        console.log("Please enter the valid capital letter")


}

//3. Write a javaScript program to find whether is number is divisible by 2 and 3

let num = prompt("Please enter the number: ");

if(num%2==0 && num%3==0){
    console.log("Number is divisible by both 2 and 3")
}
else{
    console.log("Number is not divisible by both 2 and 3")
}



//4. Write a javaScript program to find whether is number is divisible by 2 or 3


let num2 = prompt("Please enter the number: ");

if(num2 % 2==0 || num2 % 3==0){
    console.log("Number is divisible by 2 or 3")
}
else{
    console.log("Number is not divisible by 2 or 3")
}

// 5. Print "You can drive" or "You can't drive" based on the age grether than 18 using a ternary operator

let new_age = prompt("Please enter your age: ");
console.log(new_age>=18? "You can drice": "You can't drive")