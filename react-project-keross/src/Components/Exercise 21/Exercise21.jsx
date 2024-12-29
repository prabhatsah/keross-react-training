import React from "react";
import "./Exercise21.css";

function Exercise21() {
  let cl = React.useRef();
  function handleClick() {
    cl.current.click();
  }
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={cl}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default Exercise21;
