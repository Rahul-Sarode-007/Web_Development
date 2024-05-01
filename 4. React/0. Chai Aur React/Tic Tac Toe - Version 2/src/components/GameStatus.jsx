import React, { useEffect, useRef } from "react";

function GameStatus({ result, turn, squares }) {
  let status = useRef("");
  let player1 = useRef("");
  let player2 = useRef("");
  let winnerSign = useRef("X");

  useEffect(() => {
    player1.current = prompt("Enter payer 1 name");
    player2.current = prompt("Enter payer 2 name");
  }, []);

  if (squares.every((square) => square !== null) && result == null) {
    status = "It's a draw!";
  } else if (result === null) {
    if (turn) {
      status = `Next is: ${player1.current}`;
    } else {
      status = `Next is: ${player2.current}`;
    }
  } else {
    if (result === winnerSign.current) {
      status = `Winner is ${player1.current}`;
      winnerSign.current = "X";
    } else {
      status = `Winner is ${player2.current}`;
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
