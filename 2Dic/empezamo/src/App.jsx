import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Welcome() {
  return <h1>Hello world!</h1>;
}

function Saludo() {
  const nombre = "Juan";
  return <h1>Hola {nombre}!</h1>;
}

function Mensaje({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Bienvenido de nuevo</h1>
      ) : (
        <h1>Por favor, inicia sesion</h1>
      )}
    </div>
  );
}

function ListaDeTareas() {
  const tareas = ["Aprender React", "Hacer ejercicio", "Descansar la mente"];
  return (
    <ol>
      {tareas.map((tarea, index) => (
        <li key={index}>{tarea}</li>
      ))}
    </ol>
  );
}


//export default ListaDeTareas

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
{/* Esta es la forma de meter compenentes */}
        </a>
      </div>
      <Saludo />

      <Welcome />
      <h1>Vite + React</h1>
      <ListaDeTareas/>
    </>
  );
}

export default App;
