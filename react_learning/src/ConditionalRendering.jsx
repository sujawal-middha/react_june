import React from "react";
import { useState } from "react";

function ConditionalRendering() {
  const [count, setCount] = useState(0);

  return (
    <div>
      ConditionalRendering
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      {count == 0 ? (
        <h1>Condition 0</h1>
      ) : count == 1 ? (
        <h1>Condition 1</h1>
      ) : count == 2 ? (
        <h1>Condition 2</h1>
      ) : count == 3 ? (
        <h1>Condition 3</h1>
      ) : count == 4 ? (
        <h1>Condition 4</h1>
      ) : (
        <h1>other Condition</h1>
      )}
    </div>
  );
}

export default ConditionalRendering;
