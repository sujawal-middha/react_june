import React from "react";
import { useState } from "react";

function Dropdown() {
  const [drop, setDrop] = useState("Basketball");

  const handleDrop = (e) => {
    setDrop(e.target.value);
  };

  return (
    <div>
      <h1>Selected Dropdown: {drop}</h1>
      <label htmlFor="Games">Select Games:</label>
      <select onChange={handleDrop} id="games" name="games1">
        <option value="Basketball">BasketBall</option>
        <option value="Cricket">Cricket</option>
        <option value="BaseBall">BaseBall</option>
        <option value="FootBall">FootBall</option>
      </select>
    </div>
  );
}

export default Dropdown;
