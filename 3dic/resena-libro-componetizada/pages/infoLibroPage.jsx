import React from "react";
import InfoLibroComponent from "../components/infoLibroComponent";
import DondeComprarLibroComponent from "../components/DondeComprarLibroComponent";
import ResenyasLibroComponent from "../components/ResenyasLibroComponent";
import MasInfoLibroComponent from "../components/MasInfoLibroComponent";

const InfoLibroPage = () => {
  return (
    <div>
      <div>
        <h1>Pagina de detalles de un libro</h1>
      </div>
      <hr />
      <InfoLibroComponent />
      <hr />
      <MasInfoLibroComponent/>
      <hr />
      <DondeComprarLibroComponent />
      <hr />
      <ResenyasLibroComponent />
    </div>
  );
};

export default InfoLibroPage;
