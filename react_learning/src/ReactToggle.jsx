import React from "react";
import { useState } from "react";

function ReactToggle() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div>ReactToggle</div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <h1>Sujawal Middha</h1> : null}
    </>
  );
}

export default ReactToggle;
