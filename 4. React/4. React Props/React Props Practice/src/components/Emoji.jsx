import React from "react";

export default function Emoji(props) {
  return (
    <span className="emoji" role="img" aria-label="Tense Biceps">
      {props.img}
    </span>
  );
}
