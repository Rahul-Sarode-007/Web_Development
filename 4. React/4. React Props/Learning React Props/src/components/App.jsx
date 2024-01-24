import React from "react";
import Card from "./Card.jsx";
import contacts from "../contact.js";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1>My contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}
