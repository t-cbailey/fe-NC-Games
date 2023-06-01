import { useContext, useState, useEffect } from "react";
import { fetchUsers } from "../../../Utils/fetchUtils";
import UserCard from "./UserCard";
import { UserContext } from "../../../Utils/UserContext";

function UserPage() {
  const { user, setUser } = useContext(UserContext);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setAllUsers(users);

    });
  }, []);

  return (
    <>
      <h2>User page</h2>
      <ul className="userList">
        {allUsers.map((user) => {
          return <UserCard key={user.username} user={user} />;
        })}
      </ul>
    </>
  );
}

export default UserPage;
