import { useContext, useState, useEffect } from "react";
import { fetchUsers } from "../../../Utils/fetchUtils";
import UserCard from "./UserCard";
import { UserContext } from "../../../Utils/UserContext";

function UserPage() {
  const { user, setUser } = useContext(UserContext);
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setAllUsers(users);
      setIsLoading(false)
    });
  }, []);

  return (
    <>
      <h2 id="userPageTitle">Select a user to sign in</h2>
      {isLoading ? <p className="loading">loading...</p> :
        <ul className="userList">
          {allUsers.map((user) => {
            return <UserCard key={user.username} user={user} />;
          })}
        </ul>
      }
    </>
  );
}

export default UserPage;
