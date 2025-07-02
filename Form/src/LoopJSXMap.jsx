import React from "react";

function LoopJSXMap() {
  const collegeData = [
    {
      name: "Peter",
      class: 10,
      id: 1,
    },
    {
      name: "Devin",
      class: 9,
      id: 2,
    },
    {
      name: "vienne",
      class: 8,
      id: 3,
    },
    {
      name: "mien",
      class: 10,
      id: 4,
    },
  ];
  return (
    <div>
      <h1>Loop in JSX with Map Function</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>name:</td>
            <td>class:</td>
            <td>id:</td>
          </tr>
        </thead>
        <tbody>
          {collegeData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.class}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Dummy Data</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Class</td>
            <td>Id</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ABC</td>
            <td>10</td>
            <td>5</td>
          </tr>
          <tr>
            <td>DEF</td>
            <td>9</td>
            <td>6</td>
          </tr>
          <tr>
            <td>GHI</td>
            <td>10</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LoopJSXMap;
