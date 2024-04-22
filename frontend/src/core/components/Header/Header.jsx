import logo from "../../assets/images/logoHeader.png";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header-container">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav className="header-list">
        <ul>
          <li>
            <Link smooth to="/#seccion-about">
              Quienes somos
            </Link>
          </li>
          <Link smooth to="/#seccion-what">
            Que hacemos
          </Link>
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
