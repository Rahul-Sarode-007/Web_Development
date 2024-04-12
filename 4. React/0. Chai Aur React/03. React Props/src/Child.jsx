import React, { useEffect } from "react";

function Child({ parentData, onData }) {
  const childData = "Hello from child";

  useEffect(() => {
    onData(childData);
  }, [onData, childData]);

  return (
    <>
      <h2>I am Child Component</h2>
      <p>Data from parent: {parentData}</p>
    </>
  );
}

export default Child;
