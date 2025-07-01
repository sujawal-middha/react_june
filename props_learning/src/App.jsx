import React from "react";
import Child from "./Child";
import { BrowserRouter, Routes, Route } from "react-router";
import Parent from "./Parent";

function App() {
  return (
    //route is kaarn bnaya jaata he puri application me page ki identification ke liye
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Parent />} />
          <Route path="child" element={<Child />} />
          <Route path="child2" element={<Child />} />
          <Route path="child3" element={<Child />} />
          <Route path="child4" element={<Child />} />
          <Route path="child5" element={<Child />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
