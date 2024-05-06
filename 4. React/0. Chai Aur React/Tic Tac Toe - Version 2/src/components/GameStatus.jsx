import React, { useRef } from "react";



function GameStatus({ result, turn, squares, player1, player2 }) {
  const winnerSign = useRef("X");
  let status = useRef("");

  if (squares.every((square) => square !== null) && result == null) {
    let status = "It's a draw!";
  } else if (result === null) {
    if (turn) {
      status = `Next is: ${player1}`;
    } else {
      status = `Next is: ${player2}`;
    }
  } else {
    if (result === winnerSign.current) {
      status = `Winner is ${player1}`;
      winnerSign.current = "X";
    } else {
      status = `Winner is ${player2}`;
      winnerSign.current = "O";
    }
  }

  return (
    <div className="gameStatus">
      <h1>{status}</h1>
    </div>
  );
}

export default GameStatus;
