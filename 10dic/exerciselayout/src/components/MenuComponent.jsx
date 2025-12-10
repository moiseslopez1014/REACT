import React from "react";
import { Link } from "react-router";

const MenuComponent = () => {
  return (
    <nav>
      <Link to={"/"}>HomePage</Link>
      <Link to={"/contact"}>Contacto</Link>
    </nav>
  );
};

export default MenuComponent;
