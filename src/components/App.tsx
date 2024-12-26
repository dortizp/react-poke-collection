import LoginPage from "./LoginPage";
import CollectionPage from "./CollectionPage";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const isLogin = username !== "";

  const handleLogin = (username) => {
    window.localStorage.setItem("username", username);
    setUsername(username);
  };
  const handleLogout = () => {
    window.localStorage.removeItem("username");
    setUsername("");
  };

  return (
    <div>
      <button onClick={handleLogin}>Login On/Off</button>
      {isLogin ? (
        <CollectionPage username={username} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
