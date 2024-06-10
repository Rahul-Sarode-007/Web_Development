import React, { StrictMode,useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'

import { contextPropsPlayer } from './context/contextAPI'


const Main = () => {
    const [player1, setPlayer1] = useState("Rahul");
    const [player2, setPlayer2] = useState("Ani");
  
  
    return (
      <contextPropsPlayer.Provider value={{ setPlayer1, setPlayer2,player1,player2}}>
        <RouterProvider router={router} />
      </contextPropsPlayer.Provider>
    );
  };

ReactDOM.createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <Main />
    // </StrictMode>
)
