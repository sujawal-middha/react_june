import React from "react";
import { useState } from "react";

function Dropdown() {
  const [drop, setDrop] = useState([]);

  const handleDrop = () => {};

  return (
    <div>
      <h1>Selected Dropdown: {drop}</h1>
      <label htmlFor="Games">Select Games:</label>
      <select id="games" name="games">
        <option value="Basketball">BasketBall</option>
        <option value="Cricket">Cricket</option>
        <option value="BaseBall">BaseBall</option>
        <option value="FootBall">FootBall</option>
      </select>
    </div>
  );
}

export default Dropdown;
