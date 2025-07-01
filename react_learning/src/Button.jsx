import React from "react";

const callFun = (callFFu) => {
  alert("function called");
};
function Button() {
  return (
    <div>
      <button onClick={callFun}>Click me</button>
    </div>
  );
}

export default Button;
