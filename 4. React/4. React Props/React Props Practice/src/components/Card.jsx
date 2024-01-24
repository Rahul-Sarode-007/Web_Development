import React from "react";
import Emoji from "./Emoji";
import Meaning from "./Meaning";
import Name from "./Name";

export default function Card(props) {
  return (
        <div className="term">
          <dt>
            <Emoji img={props.img} />
            <Name name={props.name} />
          </dt>
          <Meaning meaning={props.meaning} />
        </div>
  );
}
