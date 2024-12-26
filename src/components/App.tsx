import LoginPage from "./LoginPage";
import CollectionPage from "./CollectionPage";
import { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  }

  return (
    <div>
      <button onClick={handleLogin}>Login On/Off</button>
      {isLogin ? <CollectionPage /> : <LoginPage />}
    </div>
  );
};

export default App;
