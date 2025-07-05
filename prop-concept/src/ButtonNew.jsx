import React from "react";

const ButtonNew = ({ label, color }) => {
  const style = {
    backgroundColor: color,
    color: "white",
    padding: "10px 20px",
    border: "none",
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return <button style={style}>{label}</button>;
};

export default ButtonNew;
