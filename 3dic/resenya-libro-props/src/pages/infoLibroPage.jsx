import React from "react";
import InfoLibroComponent from "../components/infoLibroComponent";
import DondeComprarLibroComponent from "../components/DondeComprarLibroComponent";
import ResenyasLibroComponent from "../components/ResenyasLibroComponent";
import libro from "../data/infoFromAPI";
import RecomendacionesComponent from "../components/RecomendacionesComponent";
import MasInfoLibroComponent from "../components/MasInfoLibroComponent";

const InfoLibroPage = () => {
  return (
    <div>
      <div>
        <h1>Pagina de detalles de un libro</h1>
      </div>
      <hr />
      <InfoLibroComponent ejemplo1={'Paso un parametro por props'} infoLibro={libro.info} />
      <hr />
      <MasInfoLibroComponent/>
      <hr />
      <DondeComprarLibroComponent listaTiendas={libro.tiendas} />
      <hr />
      <ResenyasLibroComponent reviewList={libro.reviews} tituloSeccion="Opiniones de los lectores" />
      <hr />
      <RecomendacionesComponent recomendaciones={libro.recomendaciones}/>
    </div>
  );
};

export default InfoLibroPage;
