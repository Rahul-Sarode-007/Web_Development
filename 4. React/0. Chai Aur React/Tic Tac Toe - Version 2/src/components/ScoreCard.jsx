import React from 'react'

export default function ScoreCard({player1,player2,appWinnerSign, score1, score2}) {

  return (
    <div>
    <h3>{player1||'Player1'} ({appWinnerSign==="X"?"X":"O"}) - {score1.current}</h3>
    <h3>{player2||'Player2'} ({appWinnerSign==="O"?"X":"O"}) - {score2.current}</h3>
</div>
  )
}
