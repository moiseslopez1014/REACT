import React from "react";
import TarjetaResenyaComponent from "./TarjetaResenyaComponent";

const ResenyasLibroComponent = (props) => {
  const {reviewList, tituloSeccion} = props;
  const numResenyas = reviewList.length;
  
  return (
    <div>
      
      <h2>{tituloSeccion}</h2>
      <h4>Numero de Reseñas: {numResenyas}</h4>
      {reviewList.map((r, idx) => (
        <div key={idx}>
          <TarjetaResenyaComponent resenya={r} key={r.id} numero={idx+1}/>
        </div>
      ))}
    </div>
  );
};

export default ResenyasLibroComponent;
