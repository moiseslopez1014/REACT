import React from "react";
import TiendaLibroComponent from "./TiendaLibroComponent";

const DondeComprarLibroComponent = (props) => {
  const { listaTiendas } = props;
  return (
    <>
      <h2>Donde comprar este libro?</h2>
      {listaTiendas.map((tienda, idx) => (
        <div key={idx}>
          <TiendaLibroComponent tienda={tienda} key={tienda.idx} />
        </div>
      ))}
    </>
  );
};

export default DondeComprarLibroComponent;
