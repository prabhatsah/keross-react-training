import React from "react";
import Form from "./Form.jsx";
import "./Exercise24.css";

// Don't change the name of the 'App'
// function and keep it a named export

export function Exercise24() {
  const form = React.useRef();
  function handleRestart() {
    form.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={form} />
    </div>
  );
}
