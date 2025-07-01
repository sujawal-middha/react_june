import { useContext, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import { CounterContext } from "./Countercontext";

function App() {
  // const [count, setCount] = useState(0);
  const { count } = useContext(CounterContext);
  return (
    <>
      <h1>Counter : {count}</h1>
      <Counter />
    </>
  );
}

export default App;
