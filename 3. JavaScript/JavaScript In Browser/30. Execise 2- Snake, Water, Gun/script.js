/*
Snake, Water and Gun Game:

1.Snake beat - Water (it drinks the Water)
Lose to Gun

2.Water beat - Gun (it drown the Gun)
Lose to Snake

3.Gun beat - Snake (it kills the Snake)
Lose to Water
*/

//CPU INPUT
let arr = ["snake", "water", "gun"];
let playAgain = true;

while (playAgain) {
  let cpuInput = arr[Math.floor(Math.random() * 3)];
  console.log(cpuInput);

  //USER INPUT
  let userInput = prompt(
    "Please enter from snake, water, gun: "
  ).toLowerCase();

  if (userInput === cpuInput) {
    alert(`Match Draw, both your and CPU choice was ${userInput}`);
  } else {
    switch (userInput) {
      case "snake":
        alert(
          cpuInput === "water"
            ? "Hurry! You won snake drink water"
            : "You lost, Gun killed snake"
        );
        break;
      case "water":
        alert(
          cpuInput === "gun"
            ? "Hurry! You won water drown gun"
            : "You lost, sanke drink the water"
        );
        break;
      case "gun":
        alert(
          cpuInput === "snake"
            ? "Hurry! You won gun kills snake"
            : "You lost, water drown gun"
        );
        break;
      default:
        playAgain = confirm(
          "Please enter the valid option form 'snake', 'water' and 'gun'"
        );
    }
  }
  playAgain = confirm("Want to play again?")
}
