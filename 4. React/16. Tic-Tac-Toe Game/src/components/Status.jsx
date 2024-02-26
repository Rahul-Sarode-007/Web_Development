import React, { useState } from "react";

export default function Status({
  calculateWinner,
  squares,
  isXNext,
  player1,
  player2,
  signX,
  signY
}) {
  const status = calculateWinner(squares);
  let statusMessage = "";
  let statusClass = "";

  // let player3 = "";
  // player3 = player1;
  // player1 = player2;
  // player2 = player3;
  // console.log(player1, player2);

  if (status) {
    // statusMessage = `Winner is ${status}`;
    if (status === signX) {
      statusMessage = `Winner is ${player1}`;
      statusClass = "winner";
    }
    if (status === signY) {
      statusClass = "winner-O";
      statusMessage = `Winner is ${player2}`;
    }
  } else if (squares.every((square) => square !== null)) {
    statusMessage = "It's a draw!";
    statusClass = "draw";
  } else {
    statusMessage = `Next is: ${signX ==="X" ? player1 : player2}`;
  }

  return <h1 className={`${statusClass} game-info`}>{statusMessage}</h1>;
}
