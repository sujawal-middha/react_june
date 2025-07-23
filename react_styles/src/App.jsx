import { useState } from "react";
import "./css/style.css";
import InlineCss from "./InlineCss";
import DynamicConditionalStyle from "./DynamicConditionalStyle";
import ExternalCss from "./ExternalCss";
import CssModule from "./CssModule";
import ReactStyledComp from "./ReactStyledComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <InlineCss /> */}
      {/* <DynamicConditionalStyle /> */}
      {/* <ExternalCss /> */}
      {/* <CssModule /> */}
      <ReactStyledComp />
    </>
  );
}

export default App;
