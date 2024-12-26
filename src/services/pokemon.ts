const POKECOLLECTION_BASE_URL = "https://poke-collection-lite-production.up.railway.app";
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const getFavorites = async (username) => {
  const url = `${POKECOLLECTION_BASE_URL}/api/${username}/favorites`
  const response = await fetch(url);
  console.log("response ", response);
  if (response.ok) {
    const data = await response.json();
    // console.log("data ", data);
  } else {
    const error = await response.json();
    // console.log(error.message || "an error ocurred");
  }
};

export const searchPokemon = async (name) => {
  const url = `${POKEAPI_BASE_URL}${name}`
  const response = await fetch(url);
  console.log("response ", response);
  if (response.ok) {
    const data = await response.json();
    // console.log("data ", data);
    return data
  } else {
    const error = await response.json();
    // console.log(error.message || "an error ocurred");
    return error
  }

}