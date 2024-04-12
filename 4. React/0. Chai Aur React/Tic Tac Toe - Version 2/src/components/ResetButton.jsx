import React from "react";

function ResetButton({onResetButtonClick}) {
  return (
    <div>
      <button onClick={onResetButtonClick} className="reset">
        Reset
      </button>
    </div>
  )
}

export default ResetButton;
