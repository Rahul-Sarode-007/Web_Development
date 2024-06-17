import React from "react";
import { useContext } from "react";
import { contextProps, contextPropsPlayer } from "../context/contextAPI";

export default function ScoreCard({ appWinnerSign }) {
  const { score1, score2 } = useContext(contextProps);
  const { player1, player2 } = useContext(contextPropsPlayer);

  return (
    <div className="score-card">
      <h3 className="score-player">
        {player1 || "Player1"} ({appWinnerSign === "X" ? "X" : "O"}) - {score1.current}
      </h3>
      <h3 className="score-player">
        {player2 || "Player2"} ({appWinnerSign === "O" ? "X" : "O"}) - {score2.current}
      </h3>
    </div>
  );
}
