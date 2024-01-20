import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Movies</h1>
    <div className="movie-poster">
      <img
        alt="Matrix movie poster"
        src="https://kinorotterdam.nl/content/uploads/2023/09/The-Matrix-poster.jpg"
      />
      <img
        alt="Her movie poster"
        src="https://i.pinimg.com/originals/eb/46/5c/eb465cc41dd0a412d8e3c4996365b86a.jpg"
      />
      <img
        alt="Ex_Machina movie poster"
        src="https://fbcd9a531b.cbaul-cdnwnd.com/34fd0c1fb00ae45f35da4097d2a57e80/system_preview_detail_200000012-5649357427/Ex-Machina.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
