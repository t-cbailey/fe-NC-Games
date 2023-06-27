import { useContext } from "react";
import { UserContext } from "../../Utils/UserContext";
import '../../Styling/home.css'

function Header() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <header>
        <h1 id="headerText">NC Games</h1>
        <div className="userNavIcon">
          <button className="selectedUser">
            <img
              id="headerAvatar"
              className="headerAvatar"
              src={user.avatar_url}
              alt={`${user.username}'s avatar`}
            />
          </button>
          <h2 id="userNavIconText">{user.username}</h2>
        </div>
      </header>
    </>
  );
}

export default Header;
