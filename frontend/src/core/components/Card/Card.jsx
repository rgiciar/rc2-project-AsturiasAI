import React, { useRef, useState} from 'react';
import Card from "./Card";





function App() {
  return (
    <div>
      <Card
        titulo={titulo}
        fecha={fecha}
        imagen={imagen}
        descripcion={descripcion}
        link={link}
      />
    </div>

const [imagenesCargadas, setImagenesCargadas] = useState(false);

useEffect(() => {
  const cargarImagenes = async () => {
    const imagenes = await Promise.all([
      import("./img/ai.png"),
      import("./img/chess.jpg"),
      import("./img/girl.jpg"),
      import("./img/glasses.jpg"),
      import("./img/robot hand.jpg"),
      import("./img/robot.jpg"),
    ]);

    setImagenesCargadas(true);
  };

  cargarImagenes();
}, []);

function App() {
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
    </div>
  );
}

<div>
<Card
  titulo="IA FRENTE A HUMANO"
  fecha="3 marzo 2024"
  imagen={imagenAI}
  descripcion="El hombre contra la máquina... una batalla que se ha librado en la imaginación humana durante siglos. Y ahora, con el auge de la inteligencia artificial (IA), esa batalla se está volviendo cada vez más real."
  link="#"
/>
</div>
 );
}

<div>
<Card
  titulo="IA, ALIADA EN PROGRAMACIÓN:UN DÚO DINÁMICO PARA EL FUTURO"
  fecha="2 marzo 2024"
  imagen={imagenAI}
  descripcion="Los programadores, esos magos modernos que convierten ideas en código y sueños en realidad. Pero, ¿y si pudieran tener un aliado en su camino? Un compañero que les ayude a ser más eficientes, a crear código más robusto y a explorar nuevas posibilidades.

  Ese aliado es la inteligencia artificial (IA). La IA está revolucionando el mundo de la programación, abriendo un nuevo mundo de posibilidades para los desarrolladores."
  link="#"

/>
</div>
 );
}

<div>
<Card
  titulo="REALIDAD VIRTUAL, UN VIAJE A OTRO MUNDO"
  fecha="6 marzo 2024"
  imagen={imagenAI}
  descripcion="Las nuevas gafas de RV son más ligeras, cómodas y accesibles que nunca. Además, ofrecen una experiencia visual y auditiva mucho más realista que las generaciones anteriores."
  link="#"
/>
</div>
 );
}

<div>
<Card
  titulo="IA HASTA EN LA SOPA"
  fecha="2 marzo 2024"
  imagen={imagenAI}
  descripcion="¿Te imaginas un futuro en el que la cocina sea cosa del pasado? La IA está revolucionando el mundo de la cocina, y los robots de cocina son cada vez más sofisticados y capaces.El robot es capaz de seguir instrucciones, medir ingredientes, cortar, mezclar y cocinar, todo sin necesidad de intervención humana."
  link="#"
/>
</div>
 );
}

<div>
<Card
  titulo="PRÓTESIS CON IA: FUTURO SIN LIMITES PARA LAS PERSONAS CON DISCAPACIDAD"
  fecha="8 marzo 2024"
  imagen={imagenAI}
  descripcion="La inteligencia artificial (IA) está llevando las prótesis a un nuevo nivel. La IA está permitiendo que las prótesis sean más inteligentes, adaptables y personalizadas que nunca."
  link="#"
/>
</div>
  );
}

export default App;

 
