import { useState } from "react";
import "./App.css";
import College from "./College";
import ClassComponent from "./ClassComponent";
import Student from "./Student";
import Subject from "./Subject";
import { SubjectContext } from "./ContextData";

function App() {
  const [subject, setSubject] = useState("");

  // 3 Parts in Context API
  // 1. Create Context : To build a context, we use `createContext` from React.
  // 2. Create Provider : The provider component wraps the part of the app that needs access to the context. It provides the context value to its children.
  // 3. Use Context in Child Component: To access the context value in a child component, we use the `useContext` hook.
  return (
    <>
      <div style={{ backgroundColor: "yellow", padding: 10 }}>
        <SubjectContext.Provider value={subject}>
          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            <option value="">Select Subject</option>
            <option value="Maths">Maths</option>
            <option value="History">History</option>
            <option value="English">English</option>
          </select>
          <h1>Context API</h1>
          <button onClick={(e) => setSubject("")}>Clear</button>
          <College />
          <ClassComponent />
          <Student />
          <Subject />
        </SubjectContext.Provider>
      </div>
    </>
  );
}

export default App;
