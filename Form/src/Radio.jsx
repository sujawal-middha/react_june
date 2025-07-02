import React from "react";
import { useState } from "react";

function Radio() {
  const [radio, setRadio] = useState("hindi");

  const showRadio = (e) => {
    // console.log(e.target.value, e.target.checked);
    if (e.target.value) {
      setRadio([...radio, e.target.value]);
    } else {
      setRadio([...radio.filter((item) => item != e.target.value)]);
    }
  };

  return (
    <div>
      <h3>Selected Language: {radio}</h3>
      <input
        type="radio"
        name="radio"
        id="hindi"
        value="Hindi"
        // checked={radio == "hindi"}
        onChange={showRadio}
      />
      <label htmlFor="hindi">Hindi</label>
      <br />
      <input
        type="radio"
        name="radio"
        id="english"
        value="English"
        // checked={radio == "english"}
        onChange={showRadio}
      />
      <label htmlFor="english">English</label>
      <br />
      <input
        type="radio"
        name="radio"
        id="Punjabi"
        value="Punjabi"
        // checked={radio == "punjabi"}
        onChange={showRadio}
      />
      <label htmlFor="Punjabi">Punjabi</label>
      <br />
      {/* <h1>{radio}</h1> */}
    </div>
  );
}

export default Radio;
