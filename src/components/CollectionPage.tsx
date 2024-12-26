const CollectionPage = ({ name, onLogout }) => {
  console.log("username", name);
  const handleLogout = () => onLogout();

  return (
    <div>
      <div>
        <h1>Collection</h1>
        {name !== "" && <p>{`Hello ${name}`}</p>}
        <button onClick={handleLogout}>Exit</button>
      </div>
    </div>
  );
};

export default CollectionPage;
