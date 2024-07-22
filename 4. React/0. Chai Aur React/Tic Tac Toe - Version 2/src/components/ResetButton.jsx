import React from "react";
import { Link } from "react-router-dom";

function ResetButton({ onResetButtonClick }) {
  return (
    <div className="reset-container">
      <button onClick={onResetButtonClick} className="reset-button">
        Reset
      </button>

      <Link to={"/"}>
        <button className="home-button">Home Page</button>
      </Link>
    </div>
  );
}

export default ResetButton;
