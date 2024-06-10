import React, { useRef } from "react";
import { useContext } from "react";
import {contextProps, contextPropsPlayer} from "../context/contextAPI"

function GameStatus({appWinnerSign}) {

  const {result, turn, squares} = useContext(contextProps)
  const {player1,player2} = useContext(contextPropsPlayer)

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
