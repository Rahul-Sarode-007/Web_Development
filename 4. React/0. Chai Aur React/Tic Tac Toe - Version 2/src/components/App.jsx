import React, { useState } from 'react'

import { RouterProvider } from 'react-router-dom'
import { router } from '../router/router'

import { contextPropsPlayer } from '../context/contextAPI'


const App = () => {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
  
  
    return (
      <contextPropsPlayer.Provider value={{ setPlayer1, setPlayer2,player1,player2}}>
        <RouterProvider router={router} />
      </contextPropsPlayer.Provider>
    );
  };

  

export default App