import React from "react";
import { useState } from "react";
import { CounterContext } from "./Countercontext";

function Counter() {
  // const [count, setCount] = useState(0);
  const { count, setCount } = React.useContext(CounterContext);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {/* <h1>Counter : {count}</h1> */}
      <button onClick={handleCount}>Add</button>
    </div>
  );
}

export default Counter;
