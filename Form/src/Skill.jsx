import React from "react";
import { useState } from "react";

function Skill() {
  const [check, setCheck] = useState([]);

  const checkButton = (e) => {
    // console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setCheck([...check, e.target.value]);
    } else {
      setCheck([...check.filter((item) => item != e.target.value)]); //for example mene list me se c# remove krna he te me use uncheck krunga and background me yeh check hoga c# baaki list se match nhi ho rhi toh baaki rkh lo means print krvado and C# ko remove krdo
    }
  };
  return (
    <div>
      <h3>Select Language:</h3>
      <input type="checkbox" value="JAVA" id="java" onChange={checkButton} />
      <label htmlFor="java">JAVA</label>
      <br />
      <input
        type="checkbox"
        value="Python"
        id="python"
        onChange={checkButton}
      />
      <label htmlFor="python">Python</label>
      <br />
      <input type="checkbox" value="C#" id="c#" onChange={checkButton} />
      <label htmlFor="c#">C#</label>
      <br />
      <h4>{check.toString()}</h4>
    </div>
  );
}

export default Skill;
