import React, { useState } from "react";
import LiveClock from "./LiveClock";

function ClockDropdown() {
  const [drop, setDrop] = useState("red");
  const handleChange = (e) => {
    setDrop(e.target.value);
  };

  return (
    <div>
      <h1>Passing color through Props</h1>
      <label htmlFor="Select Colors">Select Colors: </label>
      <select name="Select Colors" onChange={handleChange} value={drop}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <LiveClock color={drop} />
    </div>
  );
}

export default ClockDropdown;
