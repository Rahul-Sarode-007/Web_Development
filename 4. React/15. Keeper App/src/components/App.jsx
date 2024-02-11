import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
  const [notes, setNotes] = useState([
    {
      title: "New Note",
      content: "New Content",
    },
  ]);

  const addNote = (note) => {
    setNotes((prevValue) => [...prevValue, note]);
  };

  const deleteNote = (id) => {
    notes.splice(id, 1);
    setNotes((prevValue) => [...prevValue]);
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
