import React, { useRef } from "react";

function GameStatus({ result, turn, squares, player1, player2,appWinnerSign }) {
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
    if (result === appWinnerSign) {
      status = `Winner is ${player1}`;
    } else {
      status = `Winner is ${player2}`;
    }
  }

  return (
    <div className="gameStatus">
      <h1>{status}</h1>
    </div>
  );
}

export default GameStatus;
