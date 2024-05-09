import React, { useRef } from "react";

function GameStatus({ result, turn, squares, player1, player2 }) {
  const statusWinnerSign = useRef("X");
  let status = useRef("");

  if (squares.every((square) => square !== null) && result == null) {
    status = "It's a draw!";
  } 
  
  else if (result === null) {
    if (turn) {
      status = `Next is: ${player1}`;
    } 
    else {
      status = `Next is: ${player2}`;
    }
  } 
  
  else {
    if (result === statusWinnerSign.current) {
      status = `Winner is ${player1}`;
      statusWinnerSign.current = "X";
    } else {
      status = `Winner is ${player2}`;
      statusWinnerSign.current = "O";
    }
  }

  return (
    <div className="gameStatus">
      <h1>{status}</h1>
    </div>
  );
}

export default GameStatus;
