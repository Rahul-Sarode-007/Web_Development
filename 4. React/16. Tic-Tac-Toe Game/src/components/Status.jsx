import React, { useState } from "react";

export default function Status({
  calculateWinner,
  squares,
  isXNext,
  player,
  player1,
  player2
}) {
  const status = calculateWinner(squares);
  let statusMessage = "";
  let statusClass = "";
  let a= "X", b="O", c=""

 const flippingSign = (status) =>{
    if(status==="O"){
      c=a
      a=b
      b=c
      console.log(a,b,c)
    }
    if(status==="X"){
      a="X"
      b="O"
      console.log(a,b,c)
    }
  }
  

  if (status) {
    // statusMessage = `Winner is ${status}`;
    if (status===a) {
      console.log(a) 

      statusMessage = `Winner is ${player1}`;
      statusClass = "winner";
    }
    if (status===b) {
      console.log(b) 
      statusClass = "winner-O"; 
      statusMessage = `Winner is ${player2}`;
    flippingSign(status)

    }
  } else if (squares.every((square) => square !== null)) {
    statusMessage = "It's a draw!";
    statusClass = "draw";
  } else {
    statusMessage = `Next is: ${isXNext ? player.player1 : player.player2}`;
  }

  return <h1 className={`${statusClass} game-info`}>{statusMessage}</h1>;
}
