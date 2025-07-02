import { useState } from "react";
// import "./App.css";
import Skill from "./Skill";
import Radio from "./Radio";
import Dropdown from "./Dropdown";
import LoopJSXMap from "./LoopJSXMap";
import ReuseComponent from "./ReuseComponent";

function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h1>Controller Component</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <br />
        <Skill />
        <Radio />
        <Dropdown />
        <button>Submit</button>
        <button
          style={{ marginLeft: "5px" }}
          onClick={() => {
            setName("");
            setEmail("");
            setPass("");
            setCheck("");
          }}
        >
          Reset
        </button>
        <h3>{name}</h3>
        <h3>{pass}</h3>
        <h3>{email}</h3>
      </form>

      <LoopJSXMap />
      <ReuseComponent />
    </>
  );
}

export default App;
