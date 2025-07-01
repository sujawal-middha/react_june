import { useState } from "react";
import "./App.css";
import User from "./User";
import CollegeArr from "./CollegeArr";
import Student from "./Student";
import AdvanceProps from "./AdvanceProps";
import AdvanceProps2 from "./AdvanceProps2";

function App() {
  const [count, setCount] = useState(0);
  // const name = "Sujawal Middha";
  // const age = 20;
  // const email = "test@gmail.com";

  const perData = {
    name: "Sujawal Middha",
    age: 20,
    email: "test@gmail.com",
  };
  const perData2 = {
    name: "ABC",
    age: 22,
    email: "test1@gmail.com",
  };
  const perData3 = {
    name: "DEF",
    age: 24,
    email: "test3@gmail.com",
  };

  const CollegeNames = ["DAV", "LPU", "CU", "PU"];

  const [student, setStudent] = useState();
  const stdName = "First";
  return (
    <>
      {/* <User name="Sujawal Middha" age={20} email="test@gmail.com" /> */}
      {/* <User name={name} age={age} email={email} /> */}
      {/* <User name={perData.name} age={perData.age} email={perData.email} 
      /> */}
      <User person={perData} />
      <User person={perData2} />
      <User person={perData3} />
      <CollegeArr college={CollegeNames} />
      {/* <Student name={stdName} /> */}
      {student && <Student name={student} />}
      <button onClick={() => setStudent("NewStudent")}>
        Update Student Name
      </button>
      <AdvanceProps name="Advance Part" />
      <AdvanceProps />
      <AdvanceProps />
      <AdvanceProps name="new part" />
      <AdvanceProps2 color="Orange">
        <h1>Sujawal Middha</h1>
      </AdvanceProps2>
      <AdvanceProps2>
        <h1>Advance Portion</h1>
      </AdvanceProps2>
    </>
  );
}

export default App;
