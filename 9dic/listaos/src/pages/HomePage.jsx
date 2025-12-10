import React, { useState } from "react";
import CrearUsuarioComponent from "../components/CrearUsuarioComponent";
import InfoUsuarioComponent from "../components/InfoUsuarioComponent";
import { addUsuario, editUser } from "../services/UsuariosFetch";
import EditarUsuarioComponent from "../components/EditarUsuarioComponent";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("initial");
  
  const crearUsuario = (userData) => {
    addUsuario(userData);
    setUser(userData);
    setStatus("info")
  }
  const editarUsuario = (userData) => {
    editUser(userData);
  }

if (status === "initial") {
    return <>
    <CrearUsuarioComponent crearUsuario={crearUsuario}/>
    <InfoUsuarioComponent user={user} />
    </>
}

if (status === "info") {
    return <>
    <InfoUsuarioComponent user={user} setStatus={setStatus} />
    </>
}

if (status === "edit") {
    return <>
    <EditarUsuarioComponent user={user} editarUsuario={editarUsuario}/>
    </>
}
};

export default HomePage;
