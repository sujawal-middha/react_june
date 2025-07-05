import React from "react";
import ButtonNew from "./buttonNew";

function ButtonTwo() {
  const buttonsData = [
    { label: "1", color: "red" },
    { label: "2", color: "green" },
    { label: "3", color: "blue" },
    { label: "4", color: "orange" },
    { label: "5", color: "purple" },
  ];

  return (
    <div>
      {buttonsData.map((btn, index) => (
        <ButtonNew key={index} label={btn.label} color={btn.color} />
      ))}
    </div>
  );
}

export default ButtonTwo;
