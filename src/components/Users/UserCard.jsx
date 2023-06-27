import { useContext } from "react";
import { UserContext } from "../../../Utils/UserContext";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();



  function handleClick(event) {
    event.preventDefault();
    const avatar_url = event.currentTarget.querySelector('img').src;
    const username = event.currentTarget.getAttribute('name');



    setUser({ username: username, avatar_url: avatar_url });
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
        <div className="userCardText">
          <p>{user.username}</p>
        </div>
        <img
          src={user.avatar_url}
          alt={user.username}
          className="userCardImage"
        />
      </button>

    </>
  );
}

export default UserCard;
