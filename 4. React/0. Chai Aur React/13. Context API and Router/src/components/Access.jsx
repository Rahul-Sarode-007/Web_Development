import React, { useContext } from 'react';
import { contextValue } from '../context/context.js';

const Access = () => {
  const { playerName } = useContext(contextValue);
  return (<>

    <h2>You are logged in</h2>
    <p>Welcome {playerName}</p>
  </>
  );
};

export default Access;
