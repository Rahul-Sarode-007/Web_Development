import React, { useContext, useRef } from "react";
import { contextValue } from "../context/context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setPlayerName } = useContext(contextValue);
  const nameRef = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    nameRef.current = e.target.value;
  };

  const handleClick = () => {
    setPlayerName(nameRef.current);
    navigate("/access");
  };

  return (
    <div>
      <div>Login Page</div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Login;
