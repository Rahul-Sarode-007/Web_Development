import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import { PlayerContext } from './context/PlayerContext.js';


const Main = () => {
  const [playerName, setPlayerName] = useState("");

  return (
    <PlayerContext.Provider value={{ setPlayerName, playerName }}>
      <RouterProvider router={router} />
    </PlayerContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
