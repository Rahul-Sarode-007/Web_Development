import React from "react";

export default function ScoreBoard({ score, id,sign}) {
  return (
    <>
      <div className="player-scoreborad">
      {/* Note: */}
      {/* <h3>Your sign is {sign}</h3> */}
        <h2>Player {id} score</h2>
        <p>{score}</p>
      </div>
    </>
  );
}
