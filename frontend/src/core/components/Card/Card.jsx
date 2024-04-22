import "./Card.css";

import imagenKitchen from './img/kitchen.jpg';
import imagenChess from './img/chess.jpg';
import imagenGlasses from './img/glasses.jpg';
import imagenRobothand from './img/robot hand.jpg';
import imagenRobot from './img/robot.jpg';
import imagenGirl from './img/girl.jpg';

export const Card = () => {
  return (

    <section className="card-container">
      
    <div className="card">
      <img className="imagen" src={imagenKitchen} alt="Ïmagen de entrada" />
      <p className="fecha">9 de marzo de 2024</p>
      <h2 className="titulo">IA hasta en la sopa</h2>
      <p className="descripcion">La IA está revolucionando la cocina. Un robot chef prepara deliciosas ... </p>
      <a className="link" href="">
        Leer más
      </a>
    </div>
    <div className="card">
    <img className="imagen" src={imagenChess} alt="Ïmagen de entrada" />
    <p className="fecha">7 de marzo de 2024</p>
    <h2 className="titulo">IA frente a humanos</h2>
    <p className="descripcion">
Jaque mate a la inteligencia humana: La IA conquista el ajedrez
... 



</p>
    <a className="link" href="">
      Leer más
    </a>
  </div>
  <div className="card">
      <img className="imagen" src={imagenGlasses} alt="Ïmagen de entrada" />
      <p className="fecha">6 de marzo de 2024</p>
      <h2 className="titulo">El futuro de la interacción con el mundo</h2>
      <p className="descripcion">Las gafas de inteligencia artificial (IA) son un dispositivo wearable ...</p>
      <a className="link" href="">
        Leer más
      </a>
    </div>

    <div className="card">
      <img className="imagen" src={imagenRobothand} alt="Ïmagen de entrada" />
      <p className="fecha">4 de marzo de 2024</p>
      <h2 className="titulo">Prótesis con IA, el futuro de la movilidad motriz</h2>
      <p className="descripcion">En el mundo de la medicina, la inteligencia artificial (IA) está abriendo ...</p>
      <a className="link" href="">
        Leer más
      </a>
    </div>

    <div className="card">
      <img className="imagen" src={imagenRobot} alt="Ïmagen de entrada" />
      <p className="fecha">3 de marzo de 2024</p>
      <h2 className="titulo">De autómatas a IA: revolución en robótica</h2>
      <p className="descripcion">Desde sus inicios como simples autómatas mecánicos...  </p>
      <a className="link" href="">
        Leer más
      </a>
    </div>

    <div className="card">
      <img className="imagen" src={imagenGirl} alt="Ïmagen de entrada" />
      <p className="fecha">2 de marzo de 2024</p>
      <h2 className="titulo">IA femenina: redefiniendo el futuro</h2>
      <p className="descripcion">En el mundo de la inteligencia artificial (IA), la representación ...</p>
      <a className="link" href="">
        Leer más
      </a>
    </div>
  </section>  
  );
};
