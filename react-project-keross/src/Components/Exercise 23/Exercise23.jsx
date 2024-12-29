import React from "react";
import Input from "./Input";
import "./Exercise23.css";

export const userData = {
  name: "",
  email: "",
};

export default function Exercise25() {
  const inputText = React.useRef();
  const inputEmail = React.useRef();

  function handleSaveData() {
    userData.name = inputText.current.value;
    userData.email = inputEmail.current.value;

    console.log(userData);
  }

  return (
    <div id="app">
      <Input ref={inputText} type="text" label="Your Name" />
      <Input ref={inputEmail} type="email" label="Your E-Mail" />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}
