import React from "react";

const infoLibroComponent = (props) => {
  const {ejemplo1, infoLibro} = props;
  console.log(ejemplo1);

  return (
    <div>
      <h2>Informacion del libro</h2>
      <div>
        <p>Title: {infoLibro.title}</p>
        <p>ISBN: {infoLibro.ISBN}</p>
        <p>Author: {infoLibro.author}</p>
        <p>Description: {infoLibro.description}</p>
      </div>
    </div>
  );
};

export default infoLibroComponent;
