import { useContext } from "react";
import { SubjectContext } from "./ContextData";

export default function Subject() {
  const Subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: "blueviolet", padding: 10 }}>
      <h1>Subject is: {Subject}</h1>
    </div>
  );
}
