import { useEffect } from "react";
import { useState } from "react";

const UserSignUpController = () => {

  const [alertMessage, setAlertMessage] = useState("");

  const [newUser, setNewUser] = useState({
    userName: "",
    password: "",
    secondPassword: "",
  });

  const newUserHandler = (nameProp, newValueProp) => {
    setNewUser({
      ...newUser,
      [nameProp]: newValueProp,
    });
  };

  const checkFields = () => {
    if (newUser.userName.length < 3) {
      setAlertMessage("Algun campo no cumple las condiciones");
    } else if (newUser.password.length < 8) {
      setAlertMessage("Algun campo no cumple las condiciones");
    } else if (newUser.password !== newUser.secondPassword) {
      setAlertMessage("Algun campo no cumple las condiciones");
    } else {
      setAlertMessage(undefined);
    }
  };

  useEffect(() => {
    if (newUser.userName || newUser.password || newUser.secondPassword) {
      checkFields();
    }
  }, [newUser]);

  return (
    <div className="signupDiv">
      <h2>Registro de usuario</h2>
      <p>{alertMessage}</p>
      <div>
        <span>Username: </span>
        <input
          type="text"
          placeholder="Nombre de usuario"
          onChange={(event) => newUserHandler("userName", event.target.value)}
        />
      </div>
      <div>
        <span>Password: </span>
        <input
          type="text"
          placeholder="Introduzca una contrasenya"
          onChange={(event) => newUserHandler("password", event.target.value)}
        />
      </div>
      <div>
        <span>Repeat password: </span>
        <input
          type="text"
          placeholder="Repita la contrasenya"
          onChange={(event) =>
            newUserHandler("secondPassword", event.target.value)
          }
        />
      </div>
    </div>
  );
};

export default UserSignUpController;
