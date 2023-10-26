// Q.1 Write a program using a prompt function to take the input of age as an a value form the user and use alert to tell him if he can drive or not?
//Q.2 In Q.1 use confirm to ask the user if he want to see the prompt again.
//Q.3 In the previous question,use console.error to log the error if the age entered is negative.

/*
Notes: break statement - break the loop and came out of loop.
continue statement- it will break the current iteration but loop continue as given condition.
*/
let playAgain = true;

let canDrive = (age) => {
  return age > 18 ? true : false;
};

while (playAgain) {
  let age = prompt("Please enter age: ");
  age = Number.parseInt(age);

  if (age < 0) {
    console.error("Invalid age");
    alert("Please enter valid age");
    continue;
  }

  if (canDrive(age)) {
    alert("Yes you can drive");
  } else {
    alert("You cannot drive");
  }

  playAgain = confirm("Do you wanna play again");
}
