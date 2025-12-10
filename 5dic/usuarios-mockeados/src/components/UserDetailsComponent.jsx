import React from "react";

const UserDetailsComponent = (props) => {
  const { user } = props;
  return (
    <>
      <div>
        <div>
          <span>ID: </span>
          <span>{user.id}</span>
        </div>
        <div>
          <span>Nombre: </span>
          <span>{user.name}</span>
        </div>
        <div>
          <span>Nombre de usuario: </span>
          <span>{user.username}</span>
        </div>
        <div>
          <span>Correo electronico: </span>
          <span>{user.email}</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default UserDetailsComponent;
