import "./Exercise8.css";

export const user = {
  name: "",
};

function Exercise8() {
  // Your goal: This function should be called WITH A VALUE for name when the <button> is clicked
  function handleCreateUser(name) {
    user.name = name;
    alert(user.name);
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        {/* You don't need to do anything with this input! You'll learn how to handle user input later */}
        <input type="text" />
      </p>

      <p id="actions">
        <button onClick={() => handleCreateUser("Pr")}>Create User</button>
      </p>
    </div>
  );
}

export default Exercise8;
