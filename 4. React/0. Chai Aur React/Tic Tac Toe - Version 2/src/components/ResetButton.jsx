import React from "react";
import { Link } from "react-router-dom";

function ResetButton({onResetButtonClick}) {
  return (
    <div>
      <button onClick={onResetButtonClick} className="reset">
        Reset
      </button>
      <br />
      <Link to={"/"}>
      <button className="reset">Home Page</button>
      </Link>
    </div>
  )
}

export default ResetButton;
