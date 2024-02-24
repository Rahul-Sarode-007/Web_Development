import React, { useState } from "react";
import Board from "./Board";
import Status from "./Status";
import ScoreBoard from "./ScoreBoard";
import ResetButton from "./ResetButton";
import { calculateWinner } from "./winner function";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  function handleClick(i) {

    //Returning early, if square is already click or game over. 
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    //Creating new copy of "Squares" array and updating new "nextSquares" array.
    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    //Updating score state if winner found.
    const winner = calculateWinner(nextSquares);
    if (winner) {
      if (winner === "X") {
        setScore1(score1 + 1);
      } else {
        setScore2(score2 + 1);
      }
    }    

    //Updating states with new and updated copy of array "nextSquare".
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  return (
    <div className="container">
      <ScoreBoard score={score1} id={1}/>
      <div className="game">
        <Status
          calculateWinner={calculateWinner}
          squares={squares}
          isXNext={isXNext}
        />
        <Board squares={squares} handleClick={handleClick} />
        <ResetButton setSquares={setSquares} setIsXNext={setIsXNext} />
      </div>
      <ScoreBoard score={score2} id={2}/>
    </div>
  );
}
