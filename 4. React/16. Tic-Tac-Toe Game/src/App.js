import React, { useState } from "react";

function Square({ onSquareClick, value }) {
  return (
    <>
      <button onClick={onSquareClick} className="square">
        {value}
      </button>
    </>
  );
}

export default function App() {
  const [squares, SetSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(i) {
    if ((squares[i] || calculateWinner(squares))) {

      return;
    }
    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    SetSquares(nextSquares);
    setIsXNext(!isXNext);
    console.log("I am clicked", nextSquares);
  }

  const status = calculateWinner(squares);
  let statusMessage = "";
  let statusClass = "";

  if (status) {
    statusMessage = `Winner is ${status}`;
    statusClass = "winner";
  }
  else if (squares.every((square) => square !== null)) {
    statusMessage = "It's a draw!";
    statusClass = "draw";
  }
  else {
    statusMessage = `Next is: ${isXNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <div className={`${statusClass} game-info`}>{statusMessage}</div>
      <div className="board-row">
        <Square
          onSquareClick={() => {
            handleClick(0);
          }}
          value={squares[0]}
        />
        <Square
          onSquareClick={() => {
            handleClick(1);
          }}
          value={squares[1]}
        />
        <Square
          onSquareClick={() => {
            handleClick(2);
          }}
          value={squares[2]}
        />
      </div>

      <div className="board-row">
        <Square
          onSquareClick={() => {
            handleClick(3);
          }}
          value={squares[3]}
        />
        <Square
          onSquareClick={() => {
            handleClick(4);
          }}
          value={squares[4]}
        />
        <Square
          onSquareClick={() => {
            handleClick(5);
          }}
          value={squares[5]}
        />
      </div>

      <div className="board-row">
        <Square
          onSquareClick={() => {
            handleClick(6);
          }}
          value={squares[6]}
        />
        <Square
          onSquareClick={() => {
            handleClick(7);
          }}
          value={squares[7]}
        />
        <Square
          onSquareClick={() => {
            handleClick(8);
          }}
          value={squares[8]}
        />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log(squares[a], "is winner");
      return squares[a];
    }
  }
  return null;
}
