import "./Header.css";
import logo from "../../assets/images/logoHeader.png";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

export const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <button onClick={toggleMenu} className="abrir-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${menuAbierto ? "visible" : ""}`}>
        <ul className="nav-list">
          <li onClick={cerrarMenu}>
            <Link smooth to="/#seccion-about">
              Quienes somos
            </Link>
          </li>
          <li onClick={cerrarMenu}>
            <Link smooth to="/#seccion-what">
              Que hacemos 
            </Link>
          </li>
          <li onClick={cerrarMenu}>
            <Link smooth to="/blogList">
              Blog
            </Link>
          </li>
          <li onClick={cerrarMenu}>
            <Link smooth to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};