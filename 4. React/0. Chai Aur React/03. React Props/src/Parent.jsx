import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [childData, setChildData] = useState();
  const parentData = "Hello from parent";

  //Callback function
  function handleChildData(childData) {
    setChildData(childData)
  }

  return (
    <>
      <h1>I am Parent Component</h1>
      <p>Data from child: {childData}</p>
      <hr />
      <Child parentData={parentData} onData={handleChildData} />
    </>
  );
}

export default Parent;
