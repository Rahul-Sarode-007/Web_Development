import React from "react";

const ColorBtn = ({ color }) => {
  const handleClick = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <button
      onClick={() => {
        handleClick(color);
      }}

      style={{
        backgroundColor: color,
        marginRight: 10 + "px",
        padding: `${10}px ${25}px`,
        borderRadius: 10 + "px",
        border: `${2}px solid black`,
      }}
       
    >
      {color}
    </button>
  );
};

export default function App() {
  return (
    <div
      className="container"
      style={{
        height: 90 + "vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius:10+"px",
          padding:10+"px",
        }}
      >
        <ColorBtn color={"Red"} />
        <ColorBtn color={"Blue"} />
        <ColorBtn color={"Green"} />
        <ColorBtn color={"Yellow"} />
        <ColorBtn color={"Orange"} />
        <ColorBtn color={"Purple"} />
        <ColorBtn color={"Pink"} />
        <ColorBtn color={"Cyan"} />
        <ColorBtn color={"Magenta"} />
        <ColorBtn color={"Brown"} />
        <ColorBtn color={"Teal"} />
        <ColorBtn color={"Gray"} />
      </div>
    </div>
  );
}
