import { useContext } from "react";
import { UserContext } from "../../Utils/UserContext";

function Header() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <header>
        <h1>NC Games</h1>
        <button className="selectedUser">
          <img
            id="headerAvatar"
            className="headerAvatar"
            src={user.avatar_url}
            alt={`${user.username}'s avatar`}
          />
          <h2>{user.username}</h2>
        </button>
      </header>
    </>
  );
}

export default Header;
