import { useState } from "react";
import Board from "./Board";
import ResetButton from "./ResetButton";
import GameStatus from "./GameStatus";
import calculateWinner from "./winner_function";

function App() {
  const [square, setsquare] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  //Square click callback function.
  function handleClick(i) {
    //Return (terminate function) early if square is click or winner is found.
    if (square[i] || result) {
      return;
    }

    if (turn) {
      square[i] = "X";
    } else {
      square[i] = "O";
    }
    setsquare(square);
    setTurn(!turn);
  }

  //Reseting game.
  function handleResetClick() {
    setsquare(Array(9).fill(null));

    if (result == "X" || result == null) {
      setTurn(true);
    } else {
      setTurn(false);
    }
  }

  //Calling winner function on each render.
  const result = calculateWinner(square);

  return (
    <>
      <GameStatus result={result} turn={turn} />
      <Board square={square} onBoardClick={handleClick} />
      <ResetButton onResetButtonClick={handleResetClick} />
    </>
  );
}

export default App;
