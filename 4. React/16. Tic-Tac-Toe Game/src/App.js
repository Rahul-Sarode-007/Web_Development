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

function ResetButton({ onReset }) {
  return (
    <>
      <button onClick={onReset} className="reset">
        Reset
      </button>
    </>
  );
}

export default function App() {
  const [squares, SetSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
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
  }

  const status = calculateWinner(squares);
  let statusMessage = "";
  let statusClass = "";

  if (status) {
    if(status === "X") {
    setScore1(score1+1)
    }
    else{
    setScore2(score2+1)
    }
    statusMessage = `Winner is ${status}`;
    statusClass = "winner";
  } else if (squares.every((square) => square !== null)) {
    statusMessage = "It's a draw!";
    statusClass = "draw";
  } else {
    statusMessage = `Next is: ${isXNext ? "X" : "O"}`;
  }

  function onResetClick() {
    SetSquares(Array(9).fill(null));
    setIsXNext(true);
    statusMessage = "";
    statusClass = "";
  }

  return (
    <div className="container">
      <div className="player-scoreborad">
        <h2>Player 1 score</h2>
        <p className="player1-score">{score1}</p>
      </div>
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
        <ResetButton onReset={onResetClick} />
      </div>
      <div className="player-scoreborad">
        <h2>Player 2 score</h2>
        <p className="player2-score">{score2}</p>
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
      return squares[a];
    }
  }
  return null;
}

