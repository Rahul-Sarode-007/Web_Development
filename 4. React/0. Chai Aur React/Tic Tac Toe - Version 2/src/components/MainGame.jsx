import { useState, useRef } from "react";
import Board from "./Board";
import ResetButton from "./ResetButton";
import GameStatus from "./GameStatus";
import calculateWinner from "./winner_function";
import ScoreCard from "./ScoreCard";
import {contextProps} from "../context/contextAPI"
import { useContext } from "react";

function MainGame() {


  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [sign, setSign] = useState(true);

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
    <contextProps.Provider value={{score1,score2,result,turn,squares}}>

      <ScoreCard appWinnerSign={appWinnerSign.current}/>
      <GameStatus appWinnerSign={appWinnerSign.current}/>
      <Board onBoardClick={handleClick} />
      <ResetButton onResetButtonClick={handleResetClick} />
      
      </contextProps.Provider>
    </>
  );
}

export default MainGame;
