const CollectionPage = ({ username, onLogout }) => {
  const handleLogout = () => onLogout();

  return (
    <div>
      <div>
        <h1>Collection</h1>
        <p>{`Hello ${username}`}</p>
        <button onClick={handleLogout}>Exit</button>
      </div>
    </div>
  );
};

export default CollectionPage;
