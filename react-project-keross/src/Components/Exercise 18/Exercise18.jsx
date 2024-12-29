import { useState } from "react";
import "./Exercise18.css";
function Exercise18() {
  const [fontClass, setFontClass] = useState("");
  return (
    <div id="app">
      <h1 className={fontClass}> CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setFontClass("highlight-green")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setFontClass("highlight-red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default Exercise18;
