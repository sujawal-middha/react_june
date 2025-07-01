import React from "react";

// function AdvanceProps({ name }) {
//   return (
//     <div>
//       <h1>Part: {name}</h1>
//     </div>
//   );
// }

//Default Props - agar name dusre component se pass hi nhi ho rha toh ise use kr skte he
function AdvanceProps({ name = "new User" }) {
  return (
    <div>
      <h1>Part: {name}</h1>
    </div>
  );
}

export default AdvanceProps;
