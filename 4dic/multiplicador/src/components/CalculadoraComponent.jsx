import React, { useState } from "react";

const CalculadoraComponent = () => {

  const [multiplo, setMultiplo] = useState(undefined);
  const [value, setValue] = useState(1);
  const multiplicando = (num) => {
      setMultiplo(num);
      setValue(prev => prev * num);
  }

  return (
    <>
      <div>
        <h2>Multiplicador</h2>
        <button onClick={() => multiplicando(2)}>x2</button>
        <button onClick={() => multiplicando(3)}>x3</button>
        <button onClick={() => multiplicando(5)}>x5</button>
        <button onClick={() => {setMultiplo(undefined);setValue(1)}}>Reset</button>
        <br />
        <span>Resultado Multiplicador: {value}</span>
        <br />
        <span>{!multiplo ? "" : `Se ha multiplicado por ${multiplo}`}</span>
      </div>
    </>
  );
};

export default CalculadoraComponent;
