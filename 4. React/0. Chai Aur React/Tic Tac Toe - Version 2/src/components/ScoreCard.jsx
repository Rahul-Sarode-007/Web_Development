import React from "react";

export default function ScoreCard({ pin, player, appWinnerSign, score}) {
  console.log("score1: ", score)
  console.log("score2: ", score)


  return (
    <div className="scorecard-container">
      <div className="player-card">
      <div className="player-name">{player || "Player1"}</div>
      <div className={`player-sign`}>
      {pin==="yes"?(appWinnerSign === "X" ? "X" : "O"): (appWinnerSign === "O" ? "X" : "O")}
      </div>
      <div className="player-score">{score}</div>
      </div>
    </div>
  );
}
