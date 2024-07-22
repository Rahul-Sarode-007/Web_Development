import React from "react";


function Square({ index, onSquareClick }) {
  return (
    <button onClick={() => onSquareClick()} className={`square ${index==="X"?"squareX":"squareO"}`} >
    {/*  */}
      {index}
    </button>
  );
}

export default Square;
