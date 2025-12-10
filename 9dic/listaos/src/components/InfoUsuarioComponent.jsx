import React from "react";

const InfoUsuarioComponent = (props) => {
  const { user, setStatus } = props;

  return (
    <>
      <h2>Informacion del usuario</h2>
      <div className="card">{!user ? (
        "No hay usuario registrado"
      ) : (
        <>
        <div>
            <span>Username: </span>
            <span>{user.username}</span>
        </div>
        <div>
            <span>password: </span>
            <span>{user.password}</span>
        </div>
        <div>
            <span>email: </span>
            <span>{user.email}</span>
        </div>
        <button onClick={() => setStatus("edit")}>Editar</button>
        </>
        
      )}</div>
    </>
  );
};

export default InfoUsuarioComponent;
