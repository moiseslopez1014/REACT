import React from "react";

const RecomendacionesComponent = (props) => {
  const { recomendaciones } = props;
  return (
    <div>
      <h2>Recomendaciones</h2>
      {recomendaciones.map((r, idx) => (
        <div key={idx}>
          <h4>{r.title}</h4>
          <p>ISBN: {r.ISBN}</p>
          <p>Author: {r.author}</p>
          <p>Description: {r.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RecomendacionesComponent;
