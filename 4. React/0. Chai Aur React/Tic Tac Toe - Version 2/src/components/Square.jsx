import React from "react";

function Square({index,onSquareClick}) {

  return (
    <button onClick={() => onSquareClick()} className="squares">
      {index}
    </button>
  );
}

export default Square;
