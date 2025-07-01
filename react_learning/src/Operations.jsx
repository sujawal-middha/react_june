import React from "react";

function Operations() {
  const name = "sujawal middha";
  const x = 10;
  const y = 20;
  function fruit() {
    return "Apple";
  }

  const newFruit = () => {
    return "Mango";
  };

  const obj = {
    name: "Sujawal Middha",
    email: "suj@test.com",
    phone: 9569534400,
  };

  const Arr = ["one", "Two", "Three", "Four"];

  function Operation(a, b, op) {
    if (op == "+") {
      return a + b;
    } else if (op == "-") {
      return a - b;
    } else if (op == "*") {
      return a * b;
    }
  }

  // const fruit = (name) => {
  //   alert(name);
  // };

  return (
    <div>
      <h1>JSX with Curly braces</h1>
      <h2>{name ? name : "user not found"}</h2>
      <p>{x + y}</p>
      <p>{fruit()}</p>
      <p>{newFruit()}</p>
      <p>{Operation(2, 4, "-")}</p>
      <p>{obj.phone}</p>
      <p>{Arr[0]}</p>
      <input type="text" value={name} />
      {/* <button onClick={() => fruit("apple")}>Apple</button>
      <button onClick={() => fruit("Banana")}>Banana</button> */}
    </div>
  );
}

export default Operations;
