import { useState, useRef } from "react";
import Board from "./Board";
import ResetButton from "./ResetButton";
import GameStatus from "./GameStatus";
import calculateWinner from "./winner_function";
import PlayerName from "./PlayerName";
import ScoreCard from "./ScoreCard";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [sign, setSign] = useState(true);
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")

  let appWinnerSign = useRef("X");
  let score1 =  useRef(0)
  let score2 =  useRef(0)

  //Calling winner function on each render.
  const result = calculateWinner(squares);

  //Square click callback function.
  function handleClick(i) {
    if (squares[i] || result) {
      return;
    }

    squares[i] = sign?"X":"O"

    setSquares(squares);
    setSign(!sign);
    setTurn(!turn);
  }

  
  //Reseting game.
  function handleResetClick() {
    setSquares(Array(9).fill(null));
    setSign(true);

    if (result == appWinnerSign.current || result == null) {
      setTurn(true);
      appWinnerSign.current = "X";
      score1.current+=1
    } else {
      setTurn(false);
      appWinnerSign.current = "O";
      score2.current+=1
    }
  }


  return (
    <>
      <PlayerName setPlayer1={setPlayer1} setPlayer2={setPlayer2}/>
      <ScoreCard player1={player1} player2={player2} appWinnerSign={appWinnerSign.current} score1={score1} score2={score2}/>
      <GameStatus result={result} turn={turn} squares={squares} player1={player1} player2={player2} appWinnerSign={appWinnerSign.current}/>
      <Board squares={squares} onBoardClick={handleClick} />
      <ResetButton onResetButtonClick={handleResetClick} />
    </>
  );
}

export default App;
