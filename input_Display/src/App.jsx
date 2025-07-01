import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Input from "./Input";

function App() {
  const [input, setInput] = useState("");

  return (
    <>
      {/* <Input inputChange={handleInput} value={input} /> */}
      <input
        type="text"
        placeholder="Type Here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>{input}</h1>
      <button onClick={(e) => setInput(" ")}>reset</button>
    </>
  );
}

export default App;
