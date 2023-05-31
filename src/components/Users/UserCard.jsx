import { useContext } from "react";
import { UserContext } from "../../../Utils/UserContext";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    setUser({ username: event.target.id, avatar_url: event.target.src });
  }

  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      handleClick(event);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        onKeyDown={handleKeypress}
        type="button"
        className="userCard"
        name={user.username}
      >
        <img
          src={user.avatar_url}
          alt={user.username}
          className="userCardImage"
          name={user.username}
        />
        <section className="userCardText">
          <li>{user.username}</li>
        </section>
      </button>
    </>
  );
}

export default UserCard;
