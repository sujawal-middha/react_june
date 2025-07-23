import { useState } from "react";
import "./App.css";
import HandleClgDate from "./HandleClgDate";
import ReactHooks from "./ReactHooks";

function App() {
  const [count, setCount] = useState(0);

  const collegeData = [
    {
      name: "IET Alwar",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "ABC",
          age: "21",
          email: "abc@gmail.com",
        },
        {
          name: "CDE",
          age: "22",
          email: "cde@gmail.com",
        },
        {
          name: "EFG",
          age: "23",
          email: "efg@gmail.com",
        },
      ],
    },
    {
      name: "IET Alwar",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "ABC",
          age: "21",
          email: "abc@gmail.com",
        },
        {
          name: "CDE",
          age: "22",
          email: "cde@gmail.com",
        },
        {
          name: "EFG",
          age: "23",
          email: "efg@gmail.com",
        },
      ],
    },
    {
      name: "IET Alwar",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "ABC",
          age: "21",
          email: "abc@gmail.com",
        },
        {
          name: "CDE",
          age: "22",
          email: "cde@gmail.com",
        },
        {
          name: "EFG",
          age: "23",
          email: "efg@gmail.com",
        },
      ],
    },
  ];

  return (
    <>
      <h1>Nested Looping with components:</h1>
      {collegeData.map((college, index) => (
        <div key={index}>{/* <HandleClgDate college={college} /> */}</div>

        /* { <div>
          <h1>Name: {college.name}</h1>
          <ul>
            <li>
              <h3>City: {college.city}</h3>
            </li>
            <li>
              <h3>Website: {college.website}</h3>
            </li>
          </ul>
        </div> } */
      ))}
      <ReactHooks />
    </>
  );
}

export default App;
