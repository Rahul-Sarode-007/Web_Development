import React, { useRef } from "react";


function GameStatus({ result, turn, squares }) {
  let status = useRef("");
  const playerName = {
    player1: "Rahul",
    player2: "Ani",
  };

  if (squares.every((square) => square !== null) && result == null) {
    status = "It's a draw!";
  } else if (result === null) {
    if (turn) {
      status = `Next is: ${playerName.player1}`;
    } else {
      status = `Next is: ${playerName.player2}`;
    }
  } else {
    if (result === "X") {
      status = `Winner is ${playerName.player1}`;
    } else {
      status = `Winner is ${playerName.player2}`;
    }
  }

  return (
    <div className="gameStatus">
      <h1>{status}</h1>
    </div>
  );
}

export default GameStatus;
