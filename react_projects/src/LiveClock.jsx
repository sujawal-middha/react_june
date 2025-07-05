import React, { useEffect, useState } from "react";
// import ClockDropdown from "./ClockDropdown";

function LiveClock({ color }) {
  const [clock, setClock] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1
        style={{
          color: color,
          backgroundColor: "#000",
          width: "700px",
          borderRadius: "5px",
        }}
      >
        clock: {clock}
      </h1>
    </div>
  );
}

export default LiveClock;
