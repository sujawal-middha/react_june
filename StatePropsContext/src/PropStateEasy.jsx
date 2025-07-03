import React from "react";

function PropStateEasy({ message }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Received: {message}</p>
    </div>
  );
}

export default PropStateEasy;
