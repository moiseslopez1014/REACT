import React from "react";

/*
  Las propiedades que un componente puede recibir pueden ser de (casi)cualquier tipo. Por ejemplo podemos enviar del tipo:
    1) string
    2) number
    3) object
    4) array
    5) function
    6) componente de react
*/

const InfoInvitadoComponent = (props) => {
  const { invitado, deleteInvitado } = props;

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar este invitado?")
    if (confirmDelete){deleteInvitado(invitado.id)}
  }

  return (
    <div>
      <div>
        <div>
          <span>Nombre: </span>
          <span>{invitado.nombreInvitado}</span>
        </div>
        <div>
          <span>Fecha Hormiguero: </span>
          <span>{invitado.fechaHormiguero}</span>
        </div>
        <div>
          <span>Fecha Revuelta: </span>
          <span>{invitado.fechaRevuelta}</span>
        </div>
        <button onClick={handleDeleteClick}>Eliminar</button>
      </div>
    </div>
  );
};

export default InfoInvitadoComponent;
