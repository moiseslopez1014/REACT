import "./App.css";
import HolaMundoComponent from "./components/HolaMundoComponent";
import VehiculoComponent from "./components/VehiculoComponent";

function App() {
  const titulo = "Estamos intentando aprender REACTJS";
  const segunda = "Segunda constante";

  return (
    <>
      <p>{titulo}</p>
      <hr />
      <p>{segunda}</p>
      <hr />
      <HolaMundoComponent />
      <hr />
      <VehiculoComponent />
    </>
  );
}

export default App;
