import "./App.css";
import HolaMundoComponent from "./components/HolaMundoComponent";
import VehiculoComponent from "./components/VehiculoComponent";
import PresentacionComponent from "./components/PresentacionComponent";

function App() {
  const titulo = "Estamos intentando aprender REACTJS";
  const segunda = "Segunda constante";
  const tercera = "Texto de prueba para la tercera constante";

  return (
    <div>
      <p>{titulo}</p>
      <hr />
      <p>{segunda}</p>
      <hr />
      <p>{tercera}</p>
      <hr />
      <HolaMundoComponent />
      <HolaMundoComponent />
      <HolaMundoComponent />
      <hr />
      <PresentacionComponent />
      <hr />
      <VehiculoComponent />
    </div>
  );
}



export default App;
