import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import { contextValue } from './context/context.js';


const Main = () => {
  const [playerName, setPlayerName] = useState("");

  return (
    <contextValue.Provider value={{ setPlayerName, playerName }}>
      <RouterProvider router={router} />
    </contextValue.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
