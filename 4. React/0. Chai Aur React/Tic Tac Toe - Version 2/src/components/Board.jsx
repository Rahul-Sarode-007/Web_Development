import React from 'react'
import Square from './Square'

function Board({squares,onBoardClick}) {
  return (
    <div className='board'>
      <div className="squares-row">
        <Square index={squares[0]} onSquareClick={()=>{onBoardClick(0)}}/>
        <Square index={squares[1]} onSquareClick={()=>{onBoardClick(1)}}/>
        <Square index={squares[2]} onSquareClick={()=>{onBoardClick(2)}}/>
      </div>

      <div className="squares-row">
        <Square index={squares[3]} onSquareClick={()=>{onBoardClick(3)}}/>
        <Square index={squares[4]} onSquareClick={()=>{onBoardClick(4)}}/>
        <Square index={squares[5]} onSquareClick={()=>{onBoardClick(5)}}/>
      </div>

      <div className="squares-row">
        <Square index={squares[6]} onSquareClick={()=>{onBoardClick(6)}}/>
        <Square index={squares[7]} onSquareClick={()=>{onBoardClick(7)}}/>
        <Square index={squares[8]} onSquareClick={()=>{onBoardClick(8)}}/>
      </div>
    </div>
  )
}

export default Board