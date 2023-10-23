/*
Q.1 Guess the random number within 10 attempt, infrom user if entered input is grether or lower than random number.
*/

let prompt = require("prompt-sync")();
let correctNumber = Math.floor(Math.random() * 100); //0 to <0.9999
let userGuess,
  count = 0;
console.log(correctNumber);

do {
  userGuess = prompt(
    "Guess the correct number, the number is in between 0 to 99: "
  );

  userGuess = Number.parseInt(userGuess);

  if (correctNumber === userGuess) {
    console.log(
      `Hurry! you guessed the right number and your score is ${
        (10 - count) * 10
      }`
    );
  } else {
    count += 1;
    if (count == 10) {
      console.log(
        `Sorry, you are out of chances. the correct number is ${correctNumber}`
      );
      break;
    } else {
      console.log(
        `Wrong guess, try again, you have ${10 - count} chances left`
      );

      if (userGuess > correctNumber) {
        console.log(`The number is smaller than ${userGuess}`);
      } else {
        console.log(`The number is grether than ${userGuess}`);
      }
    }
  }
} while (userGuess != correctNumber && count < 10);
