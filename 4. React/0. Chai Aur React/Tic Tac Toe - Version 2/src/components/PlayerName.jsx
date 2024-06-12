import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contextPropsPlayer } from "../context/contextAPI";

export default function PlayerName() {
  const { setPlayer1, setPlayer2 } = useContext(contextPropsPlayer);
  const navigate = useNavigate();

  let player1 = useRef("");
  let player2 = useRef("");

  const handleInput1 = (e) => {
    player1 = e.target.value;
  };

  const handleInput2 = (e) => {
    player2 = e.target.value;
  };

  const handleClick = () => {
    if (typeof(player1) === "string" && typeof(player2) === "string") {
      setPlayer1(player1);
      setPlayer2(player2);
      navigate("/game");
    } else {
      alert("Please enter player1 and player2 name");
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="start-game-heading">Enter Player's Name</h2>

        <div className="player-info">
          <label htmlFor="Player1">Player 1</label>
          <input
            autoComplete="off"
            onChange={handleInput1}
            id="Player1"
            type="text"
            placeholder="Enter Player 1 Name"
          />
        </div>

        <div className="player-info">
          <label htmlFor="Player2">Player 2</label>
          <input
            autoComplete="off"
            onChange={handleInput2}
            id="Player2"
            type="text"
            placeholder="Enter Player 2 Name"
          />
        </div>

        {/* <Link to={"/maingame"}> */}
        <button onClick={handleClick} className="start-game">
          Play Now
        </button>
        {/* </Link> */}
        
      </div>
      <script src="script.js"></script>
    </div>
  );
}
