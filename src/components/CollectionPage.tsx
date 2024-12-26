import { getFavorites } from "../services/pokemon";
import PokemonSearch from "./PokemonSearch";
const CollectionPage = ({ name, onLogout }) => {
  console.log("username", name);
  const handleLogout = () => onLogout();
  const handleFavorites = () => {
    getFavorites(name)
  }

  return (
    <div>
      <div>
        <h1>Collection</h1>
        {name !== "" && <p>{`Hello ${name}`}</p>}
        <button onClick={handleFavorites}>Get Pokemon Favorites</button>
        <button onClick={handleLogout}>Exit</button>
        <PokemonSearch />

      </div>
    </div>
  );
};

export default CollectionPage;
