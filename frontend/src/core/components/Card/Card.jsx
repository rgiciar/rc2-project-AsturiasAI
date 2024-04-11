import "./Card.css";

import imagenRobot from './img/robot.jpg';


export const Card = () => {
  return (
    <div className="card">
      <h2 className="titulo">Título de entrada</h2>
      <p className="fecha">20/03/2024</p>
      <img className="imagen" src={imagenRobot} alt="Ïmagen de entrada" />
      <p className="descripcion">Hola hola esto es una descripción del blog</p>
      <a className="link" href="">
        Leer más
      </a>
    </div>
  );
};
