// import React from 'react'

// const Component1 = ({count}) => {
//   return (
//     <>Count :  {count} - </>
//   )
// }

// export default Component1


import React, { useContext } from 'react'
import { counterContext } from '../contex/context'

const Component1 = () => {
    const value = useContext(counterContext)
  return (
    <>Count :  {value.count} - </>
  )
}

export default Component1