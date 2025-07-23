import React from "react";
import styled from "styled-components";

// const Heading = styled.h1`
//   color: red;
//   border: 1px solid green;
//   border-radius: 5px;
//   margin: 20px;
//   padding: 10px;
// `;

//! one more way to style the content-

const Heading = styled.h1({
  color: "red",
  border: "1px solid green",
  borderRadius: "5px",
  margin: "20px",
  padding: "20px",
});

const StyleBtn = styled.button`
  color: red;
  width: 130px;
  height: 40px;
  margin: 20px;
`;

function ReactStyledComp() {
  return (
    <div>
      ReactStyledComp
      <Heading>Hello heading</Heading>
      <Heading>Hello heading</Heading>
      <Heading>Hello heading</Heading>
      <Heading>Hello heading</Heading>
      <StyleBtn>Login</StyleBtn>
    </div>
  );
}

export default ReactStyledComp;
