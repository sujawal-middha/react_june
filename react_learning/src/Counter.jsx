import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleCount}>Add</button>
    </div>
  );
}

export default Counter;
