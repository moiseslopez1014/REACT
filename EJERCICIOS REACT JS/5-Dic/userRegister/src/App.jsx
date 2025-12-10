import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [alertaMessage, setAlertMessage] = useState("");

  const checkFields = () => {
    if (username.length < 3) {
      setAlertMessage("El nombre de usuario debe tener al menos 3 caracteres");
    } else if (username.includes(" ")) {
      setAlertMessage("El nombre de usuario no puede contener espacios");
    } else if (password.length < 8) {
      setAlertMessage("La contraseña debe tener al menos 8 caracteres");
    } else if (password !== secondPassword) {
      setAlertMessage("Las contraseñas no coinciden");
    } else {
      setAlertMessage("Todo correcto");
    }
  };

  useEffect(() => {
    if (username || password || secondPassword) {
      checkFields();
    }
  }, [username, password, secondPassword]);

  return (
    <>
      <h1>Registro usuarios</h1>
      <p>{alertaMessage}</p>
      <div>
        <div>
          <span>Username: </span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <span>Password: </span>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <span>Password: </span>
          <input
            type="text"
            value={secondPassword}
            onChange={(e) => setSecondPassword(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
