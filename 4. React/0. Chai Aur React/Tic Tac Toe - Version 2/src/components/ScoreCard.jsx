import React from "react";
import { useContext } from "react";
import { contextProps } from "../context/contextAPI";

export default function ScoreCard({ appWinnerSign, player, score,pin }) {
  // const { player1, player2 } = useContext(contextPropsPlayer);
  // const { score1, score2 } = useContext(contextProps);

  return (
    <div className="scorecard">
      <div className="player-card">
      <h3 className="player-name">{player || "Player1"}</h3>
      <h3 className="player-sign">
      {pin==="yes"?appWinnerSign === "X" ? "X" : "O": appWinnerSign === "O" ? "X" : "O"}
      </h3>
      <h3 className="player-score">{score.current}</h3>
      </div>
    </div>
  );
}
