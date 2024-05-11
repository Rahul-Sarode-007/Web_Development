import React, {useRef} from "react";

export default function PlayerName({setPlayer1,setPlayer2}) {

  let player1 = useRef("");
  let player2 = useRef("");


  const handleInput1 = (e) =>{
    player1 = (e.target.value)
  }

  const handleInput2 = (e) =>{
    player2 = (e.target.value)
  }

  const handleClick = () =>{
    setPlayer1(player1)
    setPlayer2(player2)
  }


  return (
    <div>
      <div className="container">
        <h2 className="start-game-heading">Enter Player's Name</h2>

        <div className="player-info">
          <label htmlFor="Player1">Player 1</label>
          <input onChange={handleInput1} id="Player1" type="text" placeholder="Enter Player 1 Name" />
        </div>

        <div className="player-info">
          <label htmlFor="Player2">Player 2</label>
          <input onChange={handleInput2} id="Player2" type="text" placeholder="Enter Player 2 Name" />
        </div>

        <button onClick={handleClick} className="start-game">Play Now</button>
      </div>
      <script src="script.js"></script>
    </div>
  );
}
