import React, { useState } from "react";
import InfoInvitadosComponent from "../components/InfoInvitadosComponent";
import { getInvitados } from "../services/invitadosFetch";

const ListaInvitadosPage = () => {
  const ListaInvitadosPage = () => {
    const [listaInvitados, setListaInvitados] = useState();
    const loadInvitados = () => {
        const aux = getInvitados();
        setListaInvitados(aux);
    };

    const deleteInvitado = 
    
    useEffect(() => {
        loadInvitados();
    }, []);
    return (
        <div>
      {!listaInvitados ? (
        <div>Cargando invitados...</div>
      ) : (
        <>
          <h2>Lista de invitados</h2>
          <div>
            {listaInvitados.map((invit, idx) => (
              <InfoInvitadosComponent key={idx} invitado={invit} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
}

export default ListaInvitadosPage;
