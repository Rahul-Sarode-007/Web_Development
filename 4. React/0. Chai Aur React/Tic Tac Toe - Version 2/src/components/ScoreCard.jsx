import React, { useContext, useRef } from "react";
import { contextProps } from "../context/contextAPI";

export default function ScoreCard({ pin, player, appWinnerSign, score }) {
  console.log("score1: ", score);
  console.log("score2: ", score);

  const { squares, turn, setTurn, result } = useContext(contextProps);

  const signXColor = {
    color: "#f44336",
    fontWeight: "900",
  };

  const signOColor = {
    color: "#2196f3",
    fontWeight: "700",
  };

  const getSignColor = () => {
    return (pin === "yes" && appWinnerSign === "X") ||
      (pin !== "yes" && appWinnerSign === "O")
      ? signXColor
      : signOColor;
  };

  const getSign = () => {
    return (pin === "yes" && appWinnerSign === "X") ||
      (pin !== "yes" && appWinnerSign === "O")
      ? "X"
      : "O";
  };

  const drawTurnFlip = () => {
    let drawflip = useRef("on");
    if (drawflip.current === "on") {
      drawflip.current = "off";
      setTurn(!turn);
      console.log("Draw Flip");
    }
  };

  const getTurnIndicator = () => {
    if (squares.every((square) => square !== null) && result == null) {
      drawTurnFlip();
      return "Draw";
    } else if (result === null) {
      return pin === "yes"
        ? turn
          ? "Your Turn"
          : ""
        : turn
        ? ""
        : "Your Turn";
    } else {
      if (pin === "yes") {
        return result === appWinnerSign ? "Winner" : "Loser";
      } else {
        return result === appWinnerSign ? "Loser" : "Winner";
      }
    }
  };

  console.log(turn);

  return (
    <div className="scorecard-container">
      <div className="player-card">
        <div>
          <div className="player-name">{player || "Player1"}</div>
          <div className="player-sign" style={getSignColor()}>
            {getSign()}
          </div>
          <div className="player-score">{score}</div>
        </div>
      </div>
      <div className="turn">{getTurnIndicator()}</div>
    </div>
  );
}
