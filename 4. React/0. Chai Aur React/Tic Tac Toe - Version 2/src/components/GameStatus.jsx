import React from "react";

function GameStatus({result,turn}) {
  const playerName = {
    player1: "Rahul",
    player2: "Ani",
  };

  return (
    <div className="gameStatus">
      <h1>
        {result
          ? result == "X"
            ? `Winner is ${playerName.player1}`
            : `Winner is ${playerName.player2}`
          : turn
          ? `Next is: ${playerName.player1 || "Player 1"}`
          : `Next is: ${playerName.player2 || "Player 2"}`}
      </h1>
    </div>
  );
}

export default GameStatus;
