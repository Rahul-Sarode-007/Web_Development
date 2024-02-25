import React, { useState} from "react";
import Board from "./Board";
import Status from "./Status";
import ScoreBoard from "./ScoreBoard";
import ResetButton from "./ResetButton";
import { calculateWinner } from "./winner function";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  let [score1, setScore1] = useState(0);
  let [score2, setScore2] = useState(0);

  const [signX, setSignX] = useState("X");
  const [signO, setSignO] = useState("O");

  const [a, setA] = useState("X");
  const [b, setB] = useState("O");
  const [c, setC] = useState("");

  const handleSwapSign = (sign) => {
    if (sign === a) {
      setSignX("X");
      setSignO("O");
      setScore1(score1 + 1);
      if (sign === "O") {
        // c = a  //O
        setC(a);
        // a = b  //X
        setA(b);
        // b = c  //O
        setB(a);
      }
    }
    if (sign === b) {
      setSignX("O");
      setSignO("X");
      setScore2(score2 + 1);
      if (sign === "O") {
        // c = a  //O
        setC(a);
        // a = b  //X
        setA(b);
        // b = c  //O
        setB(a);
      }
    }
  };

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
        handleSwapSign("X");
      }
      if (winner === "O") {
        handleSwapSign("O");
      }
    }

    //Updating states with new and updated copy of array "nextSquare".
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  const handlePromptClick = () => {
    // Using window.prompt to get user input
    const player1 = window.prompt("Enter Player 1 name");
    const player2 = window.prompt("Enter Player 2 name");

    console.log("Player1:", player1);
    console.log("Player2:", player2);
  };

  return (
    <div className="outter-container">
      {/* <div>
        <button onClick={handlePromptClick}>Start the Game</button>
      </div> */}
      <img className="title" src="./images/Tic tac toe logo.png" alt=""></img>

      <div className="container">
        <ScoreBoard score={score1} id={1} sign={signX} />
        <div className="game">
          <Status
            calculateWinner={calculateWinner}
            squares={squares}
            isXNext={isXNext}
          />
          <Board
            squares={squares}
            handleClick={handleClick}
            isXNext={isXNext}
          />
          <ResetButton setSquares={setSquares} setIsXNext={setIsXNext} />
        </div>
        <ScoreBoard score={score2} id={2} sign={signO} />
      </div>
      <p className="copyright">Rahul Sarode © 2024</p>
    </div>
  );
}
