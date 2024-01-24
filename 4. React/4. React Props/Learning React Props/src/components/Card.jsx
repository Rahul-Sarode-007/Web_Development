import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import Name from "./Name";

export default function Card(props) {

  return (
    <div className="card">
      <div className="top">
        <Name name = {props.name}/>
        <Avatar img = {props.img}/>
      </div>
      <div className="bottom">
        <Detail tel={props.tel}/>
        <Detail tel={props.email}/>
      </div>
    </div>
  );
}
