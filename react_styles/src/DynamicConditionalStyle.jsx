// import React from "react";
// import { useState } from "react";

// function DynamicConditionalStyle() {
//   const [cardStyle, setCardStyle] = useState({
//     width: "200px",
//     border: "1px solid white",
//     boxShadow: "1px 2px 3px 0px #ccc",
//     margin: "10px",
//   });

//   const [textColor, setTextColor] = useState("black");
//   const [grid, setGrid] = useState(true);

//   const updateTheme = (bgColor, textColor) => {
//     // console.log(bgColor, textColor);
//     setCardStyle({ ...cardStyle, backgroundColor: bgColor });
//     setTextColor(textColor);ccc
//   };

//   return (
//     <div>
//       <h1 style={{ color: "red", backgroundColor: "yellow" }}>
//         DynamicConditionalStyle
//       </h1>
//       <button onClick={() => updateTheme("gray", "green")}>Grey Theme</button>
//       <button onClick={() => updateTheme("white", "black")}>
//         Default Theme
//       </button>
//       <button onClick={() => setGrid(!grid)}>Toggle Grid</button>
//       <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
//         <div>
//           <div
//! using the above object(cardStyle) here and We can create many of the cards with the object: -
//             style={cardStyle}
//           >
//             <img
//               style={{
//                 width: "200px",
//               }}
//               src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
//               alt="Avatar"
//               className="avatar"
//             />
//             <div style={{ padding: "5px", color: textColor }}>
//               <h4>Sujawal Middha</h4>
//               <p>UI Developer</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             //! using the above object(cardStyle) here and We can create many of the cards with the object: -
//             style={cardStyle}
//           >
//             <img
//               style={{
//                 width: "200px",
//               }}
//               src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
//               alt="Avatar"
//               className="avatar"
//             />
//             <div style={{ padding: "5px", color: textColor }}>
//               <h4>Sujawal Middha</h4>
//               <p>UI Developer</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             //! using the above object(cardStyle) here and We can create many of the cards with the object: -
//             style={cardStyle}
//           >
//             <img
//               style={{
//                 width: "200px",
//               }}
//               src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
//               alt="Avatar"
//               className="avatar"
//             />
//             <div style={{ padding: "5px", color: textColor }}>
//               <h4>Sujawal Middha</h4>
//               <p>UI Developer</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             //! using the above object(cardStyle) here and We can create many of the cards with the object: -
//             style={cardStyle}
//           >
//             <img
//               style={{
//                 width: "200px",
//               }}
//               src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
//               alt="Avatar"
//               className="avatar"
//             />
//             <div style={{ padding: "5px", color: textColor }}>
//               <h4>Sujawal Middha</h4>
//               <p>UI Developer</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             //! using the above object(cardStyle) here and We can create many of the cards with the object: -
//             style={cardStyle}
//           >
//             <img
//               style={{
//                 width: "200px",
//               }}
//               src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
//               alt="Avatar"
//               className="avatar"
//             />
//             <div style={{ padding: "5px", color: textColor }}>
//               <h4>Sujawal Middha</h4>
//               <p>UI Developer</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             //! using the above object(cardStyle) here and We can create many of the cards with the object: -
//             style={cardStyle}
//           >
//             <img
//               style={{
//                 width: "200px",
//               }}
//               src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
//               alt="Avatar"
//               className="avatar"
//             />
//             <div style={{ padding: "5px", color: textColor }}>
//               <h4>Sujawal Middha</h4>
//               <p>UI Developer</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             //! using the above object(cardStyle) here and We can create many of the cards with the object: -
//             style={cardStyle}
//           >
//             <img
//               style={{
//                 width: "200px",
//               }}
//               src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
//               alt="Avatar"
//               className="avatar"
//             />
//             <div style={{ padding: "5px", color: textColor }}>
//               <h4>Sujawal Middha</h4>
//               <p>UI Developer</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             //! using the above object(cardStyle) here and We can create many of the cards with the object: -
//             style={cardStyle}
//           >
//             <img
//               style={{
//                 width: "200px",
//               }}
//                src="https://img.freepik.com/ premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000"
// alt="Avatar"
// className="avatar"
//             />
//             <div style={{ padding: "5px", color: textColor }}>
//               <h4>Sujawal Middha</h4>
//               <p>UI Developer</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DynamicConditionalStyle;

//! BY creating the array of object of cards-
import React, { useState } from "react";
import CartObjects from "./CartObjects";

function DynamicConditionalStyle() {
  const [cardStyle, setCardStyle] = useState({
    width: "200px",
    border: "1px solid white",
    boxShadow: "1px 2px 3px 0px #ccc",
    margin: "10px",
  });

  const [textColor, setTextColor] = useState("black");
  const [grid, setGrid] = useState(true);

  const updateTheme = (bgColor, textColor) => {
    setCardStyle((prev) => ({ ...prev, backgroundColor: bgColor }));
    setTextColor(textColor);
  };

  // 🔽 Array of card objects
  const cardData = [
    {
      img: "https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000",
      name: "Sujawal Middha",
      role: "UI Developer",
    },
    {
      img: "https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000",
      name: "John Doe",
      role: "Frontend Engineer",
    },
    {
      img: "https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000",
      name: "Alice Smith",
      role: "React Developer",
    },
    {
      img: "https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg?w=2000",
      name: "Emma Johnson",
      role: "Backend Engineer",
    },
  ];

  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>
        DynamicConditionalStyle
      </h1>
      <button onClick={() => updateTheme("gray", "green")}>Grey Theme</button>
      <button onClick={() => updateTheme("white", "black")}>
        Default Theme
      </button>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button>

      <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
        {cardData.map((card, index) => (
          <div key={index} style={cardStyle}>
            <img
              style={{ width: "200px" }}
              src={card.img}
              alt={card.name}
              className="avatar"
            />
            <div style={{ padding: "5px", color: textColor }}>
              <CartObjects card={card} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicConditionalStyle;
