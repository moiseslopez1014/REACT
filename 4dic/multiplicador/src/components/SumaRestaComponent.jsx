import React, { useState } from "react";

const SumaRestaComponent = () => {
  const [operador, setOperador] = useState(0);
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);

  return (
    <div>
      <h2>Operador Suma y Resta</h2>
      <input type="number" onChange={(event) => {setValor1(Number(event.target.value))}}/>
      <br /><br />
      <input type="number" onChange={(event) => {setValor2(Number(event.target.value))}}/>
      <br /><br />
      <button onClick={() => {setOperador(valor1 + valor2)}}>Suma</button>
      <button onClick={() => {setOperador(valor1 - valor2)}}>Resta</button>
      <br /><br />
      <span>Resultado: {operador}</span>
    </div>
  );
};

export default SumaRestaComponent;
