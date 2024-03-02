import React, { useState } from "react";

export default function StartGame() {
  const [showModal, setShowModal] = useState(true);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const handleStartGame = () => {
    console.log("Player 1:", player1Name);
    console.log("Player 2:", player2Name);
    setShowModal(false);
  };

  return (
    <div className="container">
      {showModal && (
        <div className="modal">
          <h2>Enter Player Names</h2>
          <label htmlFor="player1">Player 1 Name:</label>
          <input
            type="text"
            id="player1"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
          />

          <label htmlFor="player2">Player 2 Name:</label>
          <input
            type="text"
            id="player2"
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
          />

          <button onClick={handleStartGame}>Submit</button>
        </div>
      )}
    </div>
  );
}
