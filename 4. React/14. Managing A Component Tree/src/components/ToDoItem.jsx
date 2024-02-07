import React from "react";

export default function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        return props.onClicked(props.id);
      }}
    >
      {props.items}
    </li>
  );
}
