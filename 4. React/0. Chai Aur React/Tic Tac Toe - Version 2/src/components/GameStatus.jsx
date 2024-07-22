import React, { useRef } from "react";
import { useContext } from "react";
import { contextProps, contextPropsPlayer } from "../context/contextAPI";

import ScoreCard from "./ScoreCard";


function GameStatus({}) {
  const { result, turn, squares } = useContext(contextProps);
  const { player1, player2 } = useContext(contextPropsPlayer);

  let status = useRef("");
  let appWinnerSign = useRef("X");
  let score1 = useRef(0);
  let score2 = useRef(0);

  if (squares.every((square) => square !== null) && result == null) {
    status = "It's a draw!";
  } else if (result === null) {
    if (turn) {
      status = `Next is: ${player1}`;
    } else {
      status = `Next is: ${player2}`;
    }
  } else {
    //Display winner name
    if (result === appWinnerSign.current) {
      status = `Winner is ${player1} 🥳`;
    } else {
      status = `Winner is ${player2} 🥳`;
    }

    //Updating score and sign
    if (result === appWinnerSign.current) {
      appWinnerSign.current = "X";
      score1.current += 1;
    } else {
      appWinnerSign.current = "O";
      score2.current += 1;
    }
  }

  


  return (
    <div>
      <div className="game-status">
        <h1 className="status-message">{status}</h1>
      </div>

      <div className="status-and-board">
        <ScoreCard
          pin={"yes"}
          appWinnerSign={appWinnerSign.current}
          player={player1}
          score={score1}
        />

        <ScoreCard
          pin={"no"}
          appWinnerSign={appWinnerSign.current}
          player={player2}
          score={score2}
        />
      </div>

      
    </div>
  );
}

export default GameStatus;
