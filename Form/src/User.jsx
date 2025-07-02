import React from "react";

function User({ data }) {
  return (
    <div
      style={{
        border: "1px solid green",
        padding: "10px",
        margin: "10px",
        width: "400px",
        borderRadius: "10px",
      }}
    >
      {/* <h1>User Component to pass through ReuseComponent</h1> */}
      <h3>
        Name:<span style={{ color: "green" }}>{data.name}</span>
      </h3>
      <h3>
        Class:<span style={{ color: "green" }}>{data.class}</span>
      </h3>
      <h3>
        ID:<span style={{ color: "green" }}>{data.id}</span>
      </h3>
    </div>
  );
}

export default User;
