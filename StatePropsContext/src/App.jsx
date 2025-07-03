import { useState } from "react";
import "./App.css";
import PropStateEasy from "./PropStateEasy";
import ContextChildToParent from "./ContextChildToParent";
import UseContextChild from "./UseContextChild";

function App() {
  const [message, setMessage] = useState("Hello From Parent");
  const [data, setData] = useState("Initial Data from App");

  return (
    <>
      <h1>App Component</h1>
      <PropStateEasy message={message} />
      <ContextChildToParent.Provider value={{ data, setData }}>
        <div>
          <p>data: {data}</p>
          <UseContextChild />
        </div>
      </ContextChildToParent.Provider>
    </>
  );
}

export default App;
