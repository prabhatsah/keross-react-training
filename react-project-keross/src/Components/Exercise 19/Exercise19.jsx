import React, { useState } from "react";
import "./Exercise19.css";

// don't change the Component name "App"
export default function Exercise19() {
  const [colorApplied, setColorApplied] = useState(false);
  return (
    <div>
      <p style={{ color: colorApplied ? "red" : "white" }}>Style me!</p>
      <button onClick={() => setColorApplied((colorSet) => !colorSet)}>
        Toggle style
      </button>
    </div>
  );
}
