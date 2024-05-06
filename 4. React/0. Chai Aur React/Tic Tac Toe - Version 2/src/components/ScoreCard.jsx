import React, { useRef } from 'react'

export default function ScoreCard({player1,player2,winnerSign, score1, score2}) {
    let sign1 =null, sign2 = null


    if(winnerSign==="X"){
        sign1 = "X"
        sign2 = "O"
    }

    if(winnerSign==="O"){
        sign1 = "O"
        sign2 = "X"
    }

  return (
    <div>
    <h3>{player1||'Player1'} ({sign1}) - {score1.current}</h3>
    <h3>{player2||'Player2'} ({sign2}) - {score2.current}</h3>
</div>
  )
}
