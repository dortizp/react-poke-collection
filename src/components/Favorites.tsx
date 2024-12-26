const Favorites = ({ favorites }) => {
  console.log("favorites", favorites);
  return (
    <>
      <h1>Favorites</h1>
      <div>
        {favorites.data?.length > 0 && (
            <>
            {
                favorites.data.map((favorite) => <p>{favorite.name}</p>)
            }
            </>
        )}
      </div>
    </>
  );
};

export default Favorites;
