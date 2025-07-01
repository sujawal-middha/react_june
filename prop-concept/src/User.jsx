import React from "react";

function User({ person }) {
  // console.log(data.name); Or with {name} you have given in App.jsx
  // console.log(name);

  return (
    <div>
      <h1>Name:{person.name}</h1>
      <h2>Age:{person.age}</h2>
      <h3>Email: {person.email}</h3>
    </div>
  );
}

export default User;
