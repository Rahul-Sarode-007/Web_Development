let prompt = require('prompt-sync')();

// If Else Statement

let a = prompt("Hey what's your age?");
a = Number.parseInt(a); //Typecasting from string to intiger

if(a<0){
  console.log("This is an invalid age");
}
else if(a<9){
  console.log("You are a child don't even think about driving");
}
else if(a>=9 && a<18){
  console.log("You are a kid and you can think of driving after 18");
}
else{
 console.log("You can drive") 
}


//Ternary Operator

console.log(a>70? "You are too old to drive": "You can drive")


//Switch Statement

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
