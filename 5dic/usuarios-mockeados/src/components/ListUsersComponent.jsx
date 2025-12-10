import { useEffect, useState } from "react";
import getUsers from "../services/getUsers";
import UserDetailsComponent from "./UserDetailsComponent";

const ListUsersComponent = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const aux = getUsers();
    setUsers(aux);
  }, []);

  return (
    <>
      {!users ? (
        <div>Cargando datos de usuarios...</div>
      ) : (
        <>
          {users.map((user, idx) => (
            <UserDetailsComponent key={idx} user={user} />
          ))}
        </>
      )}
    </>
  );
};

export default ListUsersComponent;
