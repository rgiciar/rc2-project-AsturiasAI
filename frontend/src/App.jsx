import './App.css'
import { AppRouter } from './middleware/router/AppRouter'
import React, { useState, useEffect } from 'react';
import Card from './Card';
import imagenAI from './Card/img/ai.png';
import imagenChess from './Card/img/chess.jpg';
import imagenGirl from './Card/img/girl.jpg';
import imagenGlasses from './Card/img/glasses.jpg';
import imagenRobotHand from './Card/img/robot hand.jpg';
import imagenRobot from './Card/img/robot.jpg';

function App() {
  return (
      <AppRouter />
  )
}

const [imagenesCargadas, setImagenesCargadas] = useState(false);

  useEffect(() => {
    const cargarImagenes = async () => {
      const imagenes = await Promise.all([
        imagenAI,
        imagenChess,
        imagenGirl,
        imagenGlasses,
        imagenRobotHand,
        imagenRobot,
      ]);

      setImagenesCargadas(true);
    };

    cargarImagenes();
  }, []);

  if (!imagenesCargadas) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Card
        titulo="LA IA ES PRESENTE"
        fecha="2 marzo 2024"
        imagen={imagenAI}
        descripcion="La inteligencia artificial (IA) ha dejado de ser un concepto futurista para convertirse en una realidad tangible que impacta nuestro día a día. Desde el reconocimiento facial en nuestros smartphones hasta los vehículos autónomos, la IA está transformando sectores como la salud, la educación, el transporte y muchos más."
        link="#"
      />
      <Card
        titulo="IA FRENTE A HUMANO"
        fecha="3 marzo 2024"
        imagen={imagenChess}
        descripcion="El hombre contra la máquina... una batalla que se ha librado en la imaginación humana durante siglos. Y ahora, con el auge de la inteligencia artificial (IA), esa batalla se está volviendo cada vez más real."
        link="#"
      />
      <Card
        titulo="IA, ALIADA EN PROGRAMACIÓN:UN DÚO DINÁMICO PARA EL FUTURO"
        fecha="2 marzo 2024"
        imagen={imagenGirl}
        descripcion="Los programadores, esos magos modernos que convierten ideas en código y sueños en realidad. Pero, ¿y si pudieran tener un aliado en su camino? Un compañero que les ayude a ser más eficientes, a crear código más robusto y a explorar nuevas posibilidades.

  Ese aliado es la inteligencia artificial (IA). La IA está revolucionando el mundo de la programación, abriendo un nuevo mundo de posibilidades para los desarrolladores."
        link="#"
      />
      <Card
        titulo="REALIDAD VIRTUAL, UN VIAJE A OTRO MUNDO"
        fecha="6 marzo 2024"
        imagen={imagenGlasses}
        descripcion="Las nuevas gafas de RV son más ligeras, cómodas y accesibles que nunca. Además, ofrecen una experiencia visual y auditiva mucho más realista que las generaciones anteriores."
        link="#"
      />
      <Card
        titulo="IA HASTA EN LA SOPA"
        fecha="2 marzo 2024"
        imagen={imagenRobotHand}
        descripcion="¿Te imaginas un futuro en el que la cocina sea cosa del pasado? La IA está revolucionando el mundo de la cocina, y los robots de cocina son cada vez más sofisticados y capaces.El robot es capaz de seguir instrucciones, medir ingredientes, cortar, mezclar y cocinar, todo sin necesidad de intervención humana."
        link="#"
      />
      <Card
        titulo="PRÓTESIS CON IA: FUTURO SIN LIMITES PARA LAS PERSONAS CON DISCAPACIDAD"
        fecha="8 marzo 2024"
        imagen={imagenRobot}
        descripcion="La inteligencia artificial (IA) está llevando las prótesis a un nuevo nivel. La IA está permitiendo que las prótesis sean más inteligentes, adaptables y personalizadas que nunca."
        link="#"
      />
    </div>
  );
;

export default App;
