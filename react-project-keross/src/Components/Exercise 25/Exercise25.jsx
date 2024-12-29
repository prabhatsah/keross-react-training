import Toast from "./Toast";
import React from "react";
import "./Exercise25.css";

function Exercise25() {
  const [enrolled, setEnrolled] = React.useState(false);
  function handleEnrol() {
    setEnrolled(true);

    setTimeout(() => {
      setEnrolled(false);
    }, 3000);
  }

  return (
    <div id="app">
      {enrolled && <Toast message="Enrolled successfully" />}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default Exercise25;
