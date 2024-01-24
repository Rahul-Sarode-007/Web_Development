import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function CreateCard(element) {
  return (
    <Card
      key={element.id}
      img={element.emoji}
      name={element.name}
      meaning={element.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div>
        <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
      </div>
    </div>
  );
}

export default App;
