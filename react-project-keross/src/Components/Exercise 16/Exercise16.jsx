import React, { useState } from "react";

import Review from "./Review";
import "./Exercise16.css";

// don't change the Component name "App"
function Exercise16() {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");

  function handleFeedback(feedbackEle) {
    setFeedback(feedbackEle.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea
            value={feedback}
            onChange={(event) => handleFeedback(event)}
          />
        </p>
        <p>
          <label>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={name} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default Exercise16;
