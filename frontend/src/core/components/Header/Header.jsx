import logo from "../../assets/images/logoHeader.png";
// import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header-container">
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Quienes somos</a>
          </li>
          <li>
            <a href="#">Que hacemos</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
