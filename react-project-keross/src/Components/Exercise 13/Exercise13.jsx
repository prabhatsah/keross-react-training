import "./Exercise13.css";

function Summary({ text }) {
  return (
    <>
      <h1>Summary</h1>
      <p>{text}</p>
    </>
  );
}

function Exercise13() {
  return (
    <div id="app" data-testid="app">
      <Summary text="Fragments help you avoid unnecessary HTML elements." />
    </div>
  );
}

export default Exercise13;
