import React from "react";

// function AdvanceProps2({ children }) {
//   return (
//     <div
//       style={{
//         color: "green",
//         border: "10px solid green",
//         width: "200px",
//         margin: "10px",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

//passing color through parent and setting default value for others.
function AdvanceProps2({ children, color = "green" }) {
  return (
    <div
      style={{
        color: color,
        border: "10px solid green",
        width: "200px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default AdvanceProps2;
