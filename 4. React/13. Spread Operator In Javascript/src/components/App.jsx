import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  const handleSubmit = (event) =>{
    event.preventDefault()
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);

    setContact((prevValue) => {
      return{
        ...prevValue,
        [name]:value
      }
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input name="fName" placeholder="First Name" onChange={handleChange} />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
