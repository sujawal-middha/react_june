import React, { useContext } from "react";
import ContextChildToParent from "./ContextChildToParent";

function UseContextChild() {
  const { data, setData } = useContext(ContextChildToParent);

  const handleChange = () => {
    setData("Updated from child");
  };
  return (
    <div>
      <h2>passing from context child to parent</h2>
      <p>Accessing Context: {data}</p>
      <button onClick={handleChange}>Update Parent Data</button>
    </div>
  );
}

export default UseContextChild;
