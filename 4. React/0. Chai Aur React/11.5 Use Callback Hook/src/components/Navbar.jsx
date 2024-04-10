import React from 'react'
import { memo } from 'react'

function Navbar({ajective,getAjective}) {
    console.log("Navbar is rendering...")
  return (
    <>
    <div>I am a {ajective} Navbar</div>
    <button onClick={()=>{getAjective()}}>{getAjective()}</button>
    </>
  )
}

export default memo(Navbar)
