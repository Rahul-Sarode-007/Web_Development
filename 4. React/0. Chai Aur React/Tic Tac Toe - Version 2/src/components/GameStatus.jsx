import React, { useRef } from "react";
import { useContext } from "react";
import { contextProps, contextPropsPlayer } from "../context/contextAPI";

function GameStatus({appWinnerSign}) {
  const { squares, turn, setTurn, result } = useContext(contextProps);
  const { player1, player2 } = useContext(contextPropsPlayer);

  let status = useRef("");

  //Draw Status
  if (squares.every((square) => square !== null) && result == null) {
    status = "It's a draw!";
      setTurn(!turn);
  } 
  
  //Display next turn player name
  else if (result === null) {
    if (turn) {
      status = `Next is: ${player1}`;
    } else {
      status = `Next is: ${player2}`;
    }
  }

  //Display winner name
  else {
    if (result === appWinnerSign) {
      status = `Winner is ${player1} 🥳`;
    } else {
      status = `Winner is ${player2} 🥳`;
    }

    //Updating score and sign
    // if (result === appWinnerSign) {
    //   appWinnerSign = "X";
    //   score1 += 1;
    // } else {
    //   appWinnerSign = "O";
    //   score2 += 1;
    // }
  }

  return (
    <div>
      <div className="game-status-container">
        <h1 className="status-message">{status}</h1>
      </div>

      {/* <div className="scorecard-container">
        <ScoreCard
          pin={"yes"}
          appWinnerSign={appWinnerSign.current}
          player={player1}
          score={score1}
        />

        <Board onBoardClick={onBoardClicks} />


        <ScoreCard
          pin={"no"}
          appWinnerSign={appWinnerSign.current}
          player={player2}
          score={score2}
        />
      </div> */}
    </div>
  );
}

export default GameStatus;
