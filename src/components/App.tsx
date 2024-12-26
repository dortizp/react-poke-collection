import LoginPage from "./LoginPage";
import CollectionPage from "./CollectionPage";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const isLogin = username !== "";

  const handleLogin = (username) => {
    const isSavedUsername = window.localStorage.key("username")
    console.log('isSavedUsername ',isSavedUsername )
    window.localStorage.setItem("username", username);
    setUsername(username);
  };
  const handleLogout = () => {
    window.localStorage.removeItem("username");
    setUsername("");
  };

  return (
    <div>
      {isLogin ? (
        <CollectionPage name={username} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
