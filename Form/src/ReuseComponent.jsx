import React from "react";
import User from "./User";

function ReuseComponent() {
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
      <h1>Reuse Component in Loop</h1>
      {collegeData.map((item) => (
        <div>
          <User data={item} />
        </div>
      ))}
    </div>
  );
}

export default ReuseComponent;
