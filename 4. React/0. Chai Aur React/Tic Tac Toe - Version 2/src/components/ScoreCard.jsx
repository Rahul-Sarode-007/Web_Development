import React from "react";

export default function ScoreCard({ pin, player, appWinnerSign, score }) {
  console.log("score1: ", score);
  console.log("score2: ", score);

  const signXStyle = {
    color: "#f44336",
    fontWeight: "900",
  };

  const signOStyle = {
    color: "#2196f3",
    fontWeight: "700",
  };

  const getSignStyle = () => {
    if ((pin === "yes" && appWinnerSign === "X") || (pin !== "yes" && appWinnerSign === "O")) {
      return signXStyle;
    } else {
      return signOStyle;
    }
  };

  const getSign = () => {
    if (pin === "yes") {
      return appWinnerSign === "X" ? "X" : "O";
    } else {
      return appWinnerSign === "O" ? "X" : "O";
    }
  };

  return (
    <div className="scorecard-container">
      <div className="player-card">
        <div>
          <div className="player-name">{player || "Player1"}</div>
          <div className="player-sign" style={getSignStyle()}>
            {getSign()}
          </div>
          <div className="player-score">{score}</div>
        </div>
      </div>
    </div>
  );
}
