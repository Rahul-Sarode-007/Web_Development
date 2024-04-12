import React from 'react'
import Square from './Square'

function Board({square,onBoardClick}) {
  return (
    <div className='board'>
      <div className="square-row">
        <Square index={square[0]} onSquareClick={()=>{onBoardClick(0)}}/>
        <Square index={square[1]} onSquareClick={()=>{onBoardClick(1)}}/>
        <Square index={square[2]} onSquareClick={()=>{onBoardClick(2)}}/>
      </div>

      <div className="square-row">
        <Square index={square[3]} onSquareClick={()=>{onBoardClick(3)}}/>
        <Square index={square[4]} onSquareClick={()=>{onBoardClick(4)}}/>
        <Square index={square[5]} onSquareClick={()=>{onBoardClick(5)}}/>
      </div>

      <div className="square-row">
        <Square index={square[6]} onSquareClick={()=>{onBoardClick(6)}}/>
        <Square index={square[7]} onSquareClick={()=>{onBoardClick(7)}}/>
        <Square index={square[8]} onSquareClick={()=>{onBoardClick(8)}}/>
      </div>
    </div>
  )
}

export default Board