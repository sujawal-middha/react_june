import { useState } from "react";
import "./App.css";
import Img from "./Img";
import Ul from "./Ul";
import Button from "./Button";
import Operations from "./Operations";
import Counter from "./Counter";
import ReactToggle from "./ReactToggle";
import ConditionalRendering from "./ConditionalRendering";

function App() {
  const [count, setCount] = useState(0);

  // const fruit = (name) => {
  //   alert(name);
  // };

  const [fruit, setFruit] = useState("apple");

  const handleFruit = () => {
    setFruit("Banana");
  };

  return (
    <>
      <h1>New Project</h1>
      <Img />
      <Ul />
      <Button />
      <Operations />
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change Fruit Name</button>
      {/* <button onClick={() => fruit("Banana")}>Banana</button> */}
      <Counter />
      <ReactToggle />
      <ConditionalRendering />
    </>
  );
}

export default App;
