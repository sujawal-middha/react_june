import React from "react";

function CartObjects({ card }) {
  return (
    <div>
      <h4>{card.name}</h4>
      <p>{card.role}</p>
    </div>
  );
}

export default CartObjects;
