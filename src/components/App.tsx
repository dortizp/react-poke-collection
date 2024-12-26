import LoginPage from "./LoginPage";
import CollectionPage from "./CollectionPage";
import { useState } from "react";
import { searchPokemon } from "../services/pokemon";

const App = () => {
  const [username, setUsername] = useState("");
  const [pokemon, setPokemon] = useState({});
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
  const handleSearch = async (pokemonName) => {
    const pokemonData = await searchPokemon(pokemonName);
    console.log("pokemonData ", pokemonData);
    const newPokemon = {
      name: pokemonData.species.name,
      img_url: pokemonData.sprites.front_default,
      types: pokemonData.types.map((el) => el.type.name),
      weight: pokemonData.weight,
      height: pokemonData.height,
      id: pokemonData.id,
    };
    console.log("newPokemon ", newPokemon);
    setPokemon(newPokemon);
  }

  return (
    <div>
      {isLogin ? (
        <CollectionPage name={username} onLogout={handleLogout} pokemon={pokemon} handleSearch={handleSearch}/>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
