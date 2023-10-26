// Q.1 Write a program using a prompt function to take the input of age as an "a" value form the user and use alert to tell him if he can drive or not?
//Q.2 In Q.1 use confirm to ask the user if he want to see the prompt again.
//Q.3 In the previous question,use console.error to log the error if the age entered is negative.

let a = 0;
let user_confirmation;
do {
  a = prompt("Please enter your age: ");
  a = Number.parseInt(a);
  if (a <= 0) {
    console.error("User entered the invalid age");
  } 
  
 
  else {
    user_confirmation = confirm(
      `You entered ${a} do you want to re-entered the age`
    );
  }
} while (user_confirmation);

alert(
  a >= 18 ? "You are 18+ you can drive" : "Sorry you can't drive as are not 18+"
);



console.log("****************************************************")
//Q.5 Change the background of the page to yellow , red or any other color base don the user input through prompt

let user_color = prompt("Please enter the background color of the page you wanna see")

document.body.style.background = user_color


console.log("****************************************************")
//Q. 4 Write a program to change the URL to google.com (redirection) if user enter the number grether than 4 and less than 10
let num

num = prompt("Please enter the number")

 if (num > 4) {
    location.href = "http://www.google.com";
}