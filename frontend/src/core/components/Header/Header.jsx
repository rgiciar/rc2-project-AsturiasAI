import "./Header.css";
import logo from "../../assets/images/logoHeader.png";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

export const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <button onClick={toggleMenu} className="abrir-menu">
        Abrir
      </button>

      <nav className={`nav ${menuAbierto ? "visible" : ""}`}>
        <ul className="nav-list">
          <li>
            <Link smooth to="/#seccion-about">
              Quienes somos
            </Link>
          </li>
          <li>
            <Link smooth to="/#seccion-what">
              Que hacemos 
            </Link>
          </li>
          <li>
            <Link smooth to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link smooth to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};