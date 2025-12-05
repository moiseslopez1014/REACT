import React, { useState } from "react";

const CalculadoraComponent = () => {
  const [num1, setNum1] = useState(undefined);
  const [num2, setNum2] = useState(undefined);
  const [resultado, setResultado] = useState(undefined);

  const operacion = (operationType) => {
    switch (operationType) {
      case "SUMAR":
        setResultado(num1 + num2);
        break;
      case "RESTAR":
        setResultado(num1 - num2);
        break;
      default:
        reset();
    }
  };
  const reset = () => {
    setNum1(undefined);
    setNum2(undefined);
    setResultado(undefined);
  };
  return (
    <>
      <div>
        <h3>Calculadora</h3>
        <div>
          <h4>Valores a usar para el calculo</h4>
          <div>
            <span>Numero 1</span>
            <input
              type="number"
              value={num1 ?? ''}
              onChange={(e) => {
                setNum1(Number(e.target.value));
              }}
            />
            <br />
            <span>Numero 2</span>
            <input
              type="number"
              value={num2 ?? ''}
              onChange={(e) => {
                setNum2(Number(e.target.value));
              }}
            />
          </div>
          <div>
            <h4>Operaciones a realizar</h4>
            <button onClick={() => operacion("SUMAR")}>+</button>
            <button onClick={() => operacion("RESTAR")}>-</button>
            <button onClick={() => operacion("RESET")}>C</button>
            <br />
            <br />
            <h4>Resultado:</h4>
            <span>{resultado}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculadoraComponent;
