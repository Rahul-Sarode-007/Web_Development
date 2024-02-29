import React, { useState } from "react";

export default function Status({
  calculateWinner,
  squares,
  isXNext,
  player
}) {
  const status = calculateWinner(squares);
  let statusMessage = "";
  let statusClass = "";


  if (status) {
    if (status==="X") { //blue
      statusMessage = `Winner is X`;
      statusClass = "winner";

    }
    if (status==="O") {
      statusClass = "winner-O"; 
      statusMessage = `Winner is O`;
    }

  } else if (squares.every((square) => square !== null)) {
    statusMessage = "It's a draw!";
    statusClass = "draw";
  } else {
    statusMessage = `Next is: ${isXNext ? player.player1 : player.player2}`;
  }

  return <h1 className={`${statusClass} game-info`}>{statusMessage}</h1>;
}
