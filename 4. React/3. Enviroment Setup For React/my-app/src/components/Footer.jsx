import React from "react";

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <p>copyright @ {year}</p>
    </footer>
  );
}
