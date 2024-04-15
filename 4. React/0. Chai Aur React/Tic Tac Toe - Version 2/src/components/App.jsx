import { useState } from "react";
import Board from "./Board";
import ResetButton from "./ResetButton";
import GameStatus from "./GameStatus";
import calculateWinner from "./winner_function";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [sign, setSign] = useState(true)

  //Square click callback function.
  function handleClick(i) {
    //Return (terminate function) early if squares is click or winner is found.
    if (squares[i] || result) {
      return;
    }

    squares[i] = sign? "X": "O";
    

    setSquares(squares);
    setSign(!sign)
    setTurn(!turn);
  }

  //Reseting game.
  function handleResetClick() {
    setSquares(Array(9).fill(null));
    setSign(true)

    if (result == "X" || result == null) {
      setTurn(true);
    } else {
      setTurn(false);
      //need to fix issue here 
    }
  }

  //Calling winner function on each render.
  const result = calculateWinner(squares);

  return (
    <>
      <GameStatus result={result} turn={turn} squares={squares}/>
      <Board squares={squares} onBoardClick={handleClick} />
      <ResetButton onResetButtonClick={handleResetClick} />
    </>
  );
}

export default App;
