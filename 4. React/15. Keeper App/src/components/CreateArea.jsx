import React, { useState } from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  return (
    <div>
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />

        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />

        <button
          onClick={() => {
            props.onAdd(note);
            setNote({
              title: "",
              content: "",
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
