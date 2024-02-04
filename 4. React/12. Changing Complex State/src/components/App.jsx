import React, { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
          autoComplete="off"
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
          autoComplete="off"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
