import React, { useState } from "react";

function Clock({ passing }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const newTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  return (
    <div>
      <h1>{passing}</h1>
      <h2>Live Clock:{time}</h2>
      <button onClick={newTime}>Update Time</button>
    </div>
  );
}

export default Clock;
