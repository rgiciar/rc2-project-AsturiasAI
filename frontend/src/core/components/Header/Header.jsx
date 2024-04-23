import logo from "../../assets/images/logoHeader.png";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";
import { useState } from "react";

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
<<<<<<< HEAD
      <nav className="header-list">
=======
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
>>>>>>> cc640f0 (Modificado Header, Footer, Router)
        <ul>
          <li>
            <Link smooth to="/#seccion-about">
              <p>Quienes somos</p>
            </Link>
          </li>
          <li>
            <Link smooth to="/#seccion-what">
              <p>Que hacemos</p> 
            </Link>
          </li>
          <li>
            <Link smooth to="/blog">
              <p>Blog</p>
            </Link>
          </li>
          <li>
            <Link smooth to="/contact">
              <p>Contacto</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
