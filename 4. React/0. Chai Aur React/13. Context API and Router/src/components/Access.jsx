import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext.js";
import { Link } from "react-router-dom";

const Access = () => {
  const { playerName } = useContext(PlayerContext);

  return (
    <>
      <h2>You are logged in</h2>
      <p>Welcome {playerName}</p>
      <Link to={"/"}>
        <button>Back to home</button>
      </Link>
    </>
  );
};

export default Access;
