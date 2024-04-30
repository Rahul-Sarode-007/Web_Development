import React, { useEffect, useRef } from "react";

function GameStatus({ result, turn, squares }) {
  let status = useRef("");
  let p1 = useRef("");
  let p2 = useRef("");
  let winnerSign = useRef("X");

  useEffect(() => {
    p1.current = prompt("Enter payer 1 name");
    p2.current = prompt("Enter payer 2 name");
    console.log(p1.current, p2.current);
  }, []);

  const playerName = {
    player1: p1.current,
    player2: p2.current,
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
    if (result === winnerSign.current) {
      status = `Winner is ${playerName.player1}`;
      winnerSign.current = "X";
    } else {
      status = `Winner is ${playerName.player2}`;
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
