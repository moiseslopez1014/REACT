import React from "react";

const CrearUsuarioComponent = (props) => {
  const {crearUsuario} = props;
  let userData = {
    username: "",
    password: "",
    email: ""
  }
  return (
    <>
      <h2>Creacion de usuario</h2>
      <div className="card">
        <div>
          <span>username: </span>
          <input type="text" onChange={(event) => (userData.username = event.target.value) }/>
        </div>
        <div>
          <span>password: </span>
          <input type="text" onChange={(event) => (userData.password = event.target.value)}/>
        </div>
        <div>
          <span>email: </span>
          <input type="text"onChange={(event) => (userData.email = event.target.value)}/>
        </div>
        <button onClick={() => crearUsuario(userData)}>Crear usuario</button>
      </div>
    </>
  );
};

export default CrearUsuarioComponent;
