import React, { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [inputValue, setInputValue] = useState("")
  
  const handleChange = (e) =>{
    console.log(e.target.value);
    setInputValue(e.target.value)
    }

    const handleClick = () =>{
      console.log(inputValue)
    }

  return (
    <>
      <nav>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <input onChange={handleChange} type="text" placeholder="Enter page name"/>

        <Link to={`/search/${inputValue}`}>
        <button onClick={handleClick}>Search</button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
