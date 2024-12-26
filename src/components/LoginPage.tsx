import { useState } from "react";
const LoginPage = ({onLogin}) => {
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: make API call with username
    // TODO: set username in state
    onLogin(username)
  }
  const handleChangeUsername = (e) => setUsername(e.target.value);
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <input
          name="username"
          onChange={handleChangeUsername}
          value={username}
        />
        <button type="submit" onClick={handleSubmit}>
          Enter
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
