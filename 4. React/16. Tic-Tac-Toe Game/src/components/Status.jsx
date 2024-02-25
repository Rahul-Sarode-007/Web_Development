import React from "react";

export default function Status({ calculateWinner, squares, isXNext }) {
  const status = calculateWinner(squares);
  let statusMessage = "";
  let statusClass = "";

  if (status) {
    statusMessage = `Winner is ${status}`;
    if(status === "X"){
      statusClass = "winner";
    }
    else{
      statusClass = "winner-O"
    }
  } else if (squares.every((square) => square !== null)) {
    statusMessage = "It's a draw!";
    statusClass = "draw";
  } else {
    statusMessage = `Next is: ${isXNext ? "X" : "O"}`;
  }

  return <h1 className={`${statusClass} game-info`}>
  {statusMessage}
  </h1>;
}
