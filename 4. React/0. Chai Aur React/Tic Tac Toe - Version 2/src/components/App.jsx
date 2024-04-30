import { useState, useRef } from "react";
import Board from "./Board";
import ResetButton from "./ResetButton";
import GameStatus from "./GameStatus";
import calculateWinner from "./winner_function";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [sign, setSign] = useState(true);

  let winnerSign = useRef("X");

  //Square click callback function.
  function handleClick(i) {
    //Return (terminate function) early if squares is already clicked or winner is already found.
    if (squares[i] || result) {
      return;
    }

    if (sign === true) {
      squares[i] = "X";
    } else {
      squares[i] = "O";
    }

    setSquares(squares);
    setSign(!sign);
    setTurn(!turn);
  }

  //Reseting game.
  function handleResetClick() {
    setSquares(Array(9).fill(null));
    setSign(true);

    if (result == winnerSign.current || result == null) {
      setTurn(true);
      winnerSign.current = "X";
    } else {
      setTurn(false);
      winnerSign.current = "O";
    }
  }

  //Calling winner function on each render.
  const result = calculateWinner(squares);

  return (
    <>
      <GameStatus result={result} turn={turn} squares={squares} />
      <Board squares={squares} onBoardClick={handleClick} />
      <ResetButton onResetButtonClick={handleResetClick} />
    </>
  );
}

export default App;
