const BASE_URL = "https://poke-collection-lite-production.up.railway.app";

export const getFavorites = async (username) => {
  const url = `${BASE_URL}/api/${username}/favorites`
  const response = await fetch(url);
  console.log("response ", response);
  if (response.ok) {
    const data = await response.json();
    console.log("data ", data);
  } else {
    const error = await response.json();
    console.log(error.message || "an error ocurred");
  }
};
