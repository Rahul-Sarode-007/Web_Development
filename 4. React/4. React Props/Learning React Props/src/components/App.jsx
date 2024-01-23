import React from "react";
import Card from "./Card.jsx";
import contacts from "../contact.js";

export default function App() {
  const CardItems = contacts.map((contact) => {
    return (
      <Card
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    );
  });
  
  return CardItems;
}
