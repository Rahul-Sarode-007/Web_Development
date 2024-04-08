// import React from 'react'
// import Component1 from './Component1'

// const Button = ({count}) => {
//   return (
//     <>
//     <h3><span><Component1 count={count}/></span> I am button</h3>
    
//     </>
//   )
// }

// export default Button




import React,  { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from '../contex/context'

const Button = () => {
    const value = useContext(counterContext)
  return (
    <>
    <button onClick={() => value.setCount((count) => count + 1)}><span><Component1/></span> I am button</button>
    
    </>
  )
}

export default Button