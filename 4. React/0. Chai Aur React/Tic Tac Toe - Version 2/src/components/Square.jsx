import React from "react";

function Square({index,onSquareClick}) {

  return (
    <button onClick={() => onSquareClick()} className="square">
      {index}
    </button>
  );
}

export default Square;
