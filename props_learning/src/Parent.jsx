import React from "react";
import Child from "./Child";

function Parent() {
  const propNew = "Monday";
  const propNew1 = "Tuesday";
  const propNew2 = "Wednesday";
  const propNew3 = "Thursday";
  const propNew4 = "Friday";
  const propNew5 = "Saturday";

  return (
    <>
      <div>Parent</div>
      <Child propCh={propNew} />
      <Child propCh1={propNew1} />
      <Child propCh2={propNew2} />
      <Child propCh3={propNew3} />
      <Child propCh4={propNew4} />
      <Child propCh5={propNew5} />
    </>
  );
}

export default Parent;
