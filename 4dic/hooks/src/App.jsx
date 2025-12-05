import React, { useState } from "react";
import "./App.css";

const App = () => {
  
    let nombreSinUseState = 'Nombre';

    const cambioNombre = (newName) => {
        nombreSinUseState  = newName;
        console.log("Nombre Sin useState: ",nombreSinUseState);
    }

    const [name, setName] = useState(undefined)

    const [edad, setEdad] = useState(18);

    return (
    <>
      <div>
        <h3>Nombre sin useState: {nombreSinUseState}</h3>
        <div>
            <span>Nombre: </span>
            <input type="text" onChange={(event) => cambioNombre(event.target.value)} />
        </div>
      </div>
      <div>
        <h3>Nombre con useState: {name}</h3>
        <div>
            <span>Nombre: </span>
            <input type="text" onChange={(event) => setName(event.target.value)} />
            <br />
            <span>{!name ? "No has escrito nada aun" : "Estas escibiendo..."}</span>
            <p>Edad actual: {edad}</p>
            <button onClick={() => setEdad(21)}>Cumplir 21</button>
            <button onClick={() => setEdad(edad+1)}>un añito menos</button>
        </div>
      </div>
    </>
  );
};

export default App;
