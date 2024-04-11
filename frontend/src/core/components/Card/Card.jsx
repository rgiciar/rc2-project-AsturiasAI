import "./Card.css";


import imagenKitchen from './img/kitchen.jpg';


export const Card = () => {
  return (
    <div className="card">
      <img className="imagen" src={imagenKitchen} alt="Ïmagen de entrada" />
      <p className="fecha">2 de marzo de 2024</p>
      <h2 className="titulo">IA HASTA EN LA SOPA</h2>
      <p className="descripcion">La IA está revolucionando la cocina. Un robot chef prepara deliciosas recetas con solo tocar un botón. puede cocinar de forma independiente, sin necesidad de intervención humana.</p>
      <a className="link" href="">
        Leer más
      </a>
    </div>

    
  );
};
