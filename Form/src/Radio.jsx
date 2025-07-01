import React from "react";
import { useState } from "react";

function Radio() {
  const [radio, setRadio] = useState([]);

  const showRadio = (e) => {
    // console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setRadio([...radio, e.target.value]);
    } else {
      setRadio([...radio.filter((item) => item != e.target.value)]);
    }
  };

  return (
    <div>
      <h3>Selected Language: {radio}</h3>
      <input type="radio" id="hindi" value="Hindi" onChange={showRadio} />
      <label htmlFor="hindi">Hindi</label>
      <br />
      <input type="radio" id="english" value="English" onChange={showRadio} />
      <label htmlFor="english">English</label>
      <br />
      <input type="radio" id="Punjabi" value="Punjabi" onChange={showRadio} />
      <label htmlFor="Punjabi">Punjabi</label>
      <br />
      {/* <h1>{radio}</h1> */}
    </div>
  );
}

export default Radio;
