import { useState, useRef, useContext } from "react";
import Board from "./Board";
import ResetButton from "./ResetButton";
import GameStatus from "./GameStatus";
import calculateWinner from "./winner_function";
// import ScoreCard from "./ScoreCard";
import { contextProps, contextPropsPlayer } from "../context/contextAPI";

function PlayGame() {
  const { player1, player2 } = useContext(contextPropsPlayer);

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [sign, setSign] = useState(true);

  let appWinnerSign = useRef("X");
  // let score1 = useRef(0);
  // let score2 = useRef(0);

  const result = calculateWinner(squares);


  //Square click functionality
  function handleClick(i) {
    if (squares[i] || result) {
      return;
    }

    squares[i] = sign ? "X" : "O";

    setSquares(squares);
    setSign(!sign);
    setTurn(!turn);
  }


  //Reset button functionality
  function handleResetClick() {
    setSquares(Array(9).fill(null));
    setSign(true);

    if (result == null) {
      return;
    }

    if (result === appWinnerSign.current) {
      setTurn(true);
      appWinnerSign.current = "X";
      // score1.current += 1;
    } else {
      setTurn(false);
      appWinnerSign.current = "O";
      // score2.current += 1;
    }
  }

  return (
    <div className="play-game">
      <contextProps.Provider value={{ squares, turn, result,setTurn }}>
        <GameStatus appWinnerSign={appWinnerSign.current} />

        <Board onBoardClick={handleClick} />

        {/* <div className="status-and-board">
          <ScoreCard
            pin={"yes"}
            appWinnerSign={appWinnerSign.current}
            player={player1}
            score={score1}
          />

          <Board onBoardClick={handleClick} />

          <ScoreCard
            pin={"no"}
            appWinnerSign={appWinnerSign.current}
            player={player2}
            score={score2}
          />
        </div> */}

        <ResetButton onResetButtonClick={handleResetClick} />
      </contextProps.Provider>
    </div>
  );
}

export default PlayGame;
