import { useState } from "react";
import "./Exercise17.css";

function Exercise17() {
  const [fontColor, setFontColor] = useState("white");
  return (
    <div id="app">
      <h1 style={{ color: fontColor }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setFontColor("green")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setFontColor("red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default Exercise17;
