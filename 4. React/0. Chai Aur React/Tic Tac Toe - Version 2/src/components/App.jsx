import { useState, useEffect } from "react";

function App() {
  const arr = new Array(9).fill(null);
  const [square, setsquare] = useState(arr);
  const [turn, setTurn] = useState(true);
  const playerName = {
    player1: "Rahul",
    player2: "Ani",
  };

  function handleClick(i) {
    if (!square[i] && !result) {
      if (turn) {
        square[i] = "X";
      } else {
        square[i] = "O";
      }
      setsquare(square);
      setTurn(!turn);
      console.log(square);
    }
  }

  function Sqaure({ i }) {
    return (
      <button
        onClick={() => {
          handleClick(i);
        }}
        className="square"
      >
        {square[i]}
      </button>
    );
  }

  const result = calculateWinner(square);
  console.log(result);

  return (
    <>
      {/* <div className="names">
        <label htmlFor="">Player 1: </label>
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Player 2: </label>
        <input type="text" />
      </div> */}
      <h1>
        {result
          ? result == "X"
            ? `Winner is ${playerName.player1}`
            : `Winner is ${playerName.player2}`
          : turn
          ? `Next is: ${playerName.player1}`
          : `Next is: ${playerName.player2}`}
      </h1>
      <div className="square-row">
        <Sqaure i={0} />
        <Sqaure i={1} />
        <Sqaure i={2} />
      </div>

      <div className="square-row">
        <Sqaure i={3} />
        <Sqaure i={4} />
        <Sqaure i={5} />
      </div>

      <div className="square-row">
        <Sqaure i={6} />
        <Sqaure i={7} />
        <Sqaure i={8} />
      </div>
    </>
  );
}

function calculateWinner(square) {
  const winningpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningpattern.length; i++) {
    let [a, b, c] = winningpattern[i];
    if (square[a] == square[b] && square[b] == square[c]) {
      return square[a];
    }
  }
  return null;
}

export default App;
