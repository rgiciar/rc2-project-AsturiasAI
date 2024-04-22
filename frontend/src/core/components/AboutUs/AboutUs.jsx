import "../AboutUs/AboutUs.css";

import PatriciaAcebes from "../../assets/images/Patricia_Acebes.jpg";
import BeatrizInfanzon from "../../assets/images/Beatriz_Infanzon.png";
import PabloViejo from "../../assets/images/Pablo_Viejo.jpg";
import PabloManuel from "../../assets/images/Pablo_Manuel.jpg";
import AndresAbad from "../../assets/images/Andres_Abad.png";


export const AboutUs = () => {
  return (
    <div>
      <h1 className="title" id="seccion-about">
        QUIENES SOMOS
      </h1>
      <div className="quienes-somos">
        <div className="section">
          <div className="content">
            <img src={PatriciaAcebes} alt="Imagen 1" className="round-image1" />
            <h2 className="name1">PATRICIA ACEBES TAMARGO</h2>
          </div>
          <div className="info1">
            <p>
              Fundadora responsable de AsturiasAi .Es economista cuantitativa,
              con formación de postgrado inteligencia artificial, blockchain e
              actualmente iniciándose en temas de computación cuántica y
              doctoranda en la universidad de Alcalá en temas de sostenibilidad
              ambiental y criptomonedas, además de disponer de un especial
              interés en el estudio del análisis de la microbiota
              intestinal(bacterias tenemos en el intestino) sobre la salud
              utilizando la metodología de machine learning (data / ia).Dispone
              de más de seis años en el mundo tecnológico. Tanto en consultoría
              tecnológica, startups, cómo durante los últimos años en un centro
              tecnológico. Sus funciones han ido ligadas tanto en lo que
              concierne a labores de data science,hasta labores de gestión de
              proyectos nacionales y europeos(ya fueran búsqueda de partners,
              convocatorias, paquetes de trabajo, ) y de difusión de la
              tecnología de inteligencia artificial y blockchain. Anteriormente
              ha desempeñado funciones tanto en el sector financiero, cómo de la
              administración pública.
            </p>
            <a
              href="https://www.linkedin.com/in/patriciaacebestamargo/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin1"
            >
              Más sobre mí: https://www.linkedin.com/in/patriciaacebestamargo/
            </a>
          </div>
        </div>
        <hr />
        <div className="section2">
          <div className="info2">
            <p>
              Divulgadora y redactora de contenidos tecnológicos. Se ha
              especializado en tecnologías emergentes como blockchain, Web3,
              criptoeconomía, inteligencia artificial, IoT y Big Data.Facilita
              que los términos tecnológicos sean más fáciles de entender a
              través de contenidos, que crea para sus clientes y también para
              sus seguidores. Prueba de ello es Stories from the Web3, un canal
              de Youtube y una newsletter semanal, donde comparte noticias de
              Web3 y todo lo que va descubriendo en su día a día como creadora
              de contenido.{" "}
            </p>
            <a
              href="https://www.linkedin.com/in/beatrizinfanzon/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin2"
            >
              Más sobre mí: https://www.linkedin.com/in/beatrizinfanzon/
            </a>
          </div>
          <div className="content">
            <img src={BeatrizInfanzon} alt="Imagen 2" className="round-image2" />
            <h2 className="name2">BEATRIZ INFANZÓN</h2>
          </div>
        </div>
        <hr />
        <div className="section3">
          <div className="content">
            <img src={PabloViejo} alt="Imagen 3" className="round-image3" />
            <h2 className="name3">PABLO VIEJO</h2>
          </div>
          <div className="info3">
            <p>
              Fundador y CEO de Bettermaps.AI, se especializa en el desarrollo
              de proyectos con inteligencia artificial (IA) y tecnologías
              geoespaciales, tanto en desarrollo de productos como en
              consultoría. Su experiencia incluye la implementación de IA y
              modelado 3D para análisis y gestión espacial. Como CEO de PTGEM,
              lideró el desarrollo de soluciones innovadoras para el Internet de
              las Cosas (IoT), integrando tecnologías web 3D y análisis
              geoespacial. Pablo participa activamente en proyectos de
              investigación y desarrollo, aplicando la IA para impulsar el
              avance de tecnologías digitales. Además de su rol en
              Bettermaps.AI, Pablo Viejo ha tenido una carrera destacada en el
              ámbito internacional, marcada por posiciones de liderazgo en
              diversas geografías, desde Singapur hasta España. Durante su
              estancia en Singapur, se desempeñó como Administrador General de
              EDF Lab Singapore y Jefe del Centro de Excelencia de Ciudades
              Sostenibles de EDF, donde lideró proyectos innovadores en
              tecnologías sostenibles y digitales para ciudades. Pablo posee una
              formación académica sólida con un título en Arquitectura de la
              Universität Karlsruhe (TH) y programas especializados en Sistemas
              Complejos.
            </p>
            <a
              href="https://www.linkedin.com/in/pablo-viejo/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin3"
            >
              Más sobre mí: https://www.linkedin.com/in/pablo-viejo/
            </a>
          </div>
        </div>
        <hr />
        <div className="section4">
          <div className="info4">
            <p>
              Se formó como físico en la Universidad Complutense de Madrid. A lo
              largo de su carrera ha ido pasando por posiciones muy diversas, ha
              sido investigador en física médica, devops y automatizador de
              procesos o ha desarrollado entornos de monitorización y analítica
              avanzada. Todo ello siempre con una perspectiva de orientación al
              dato y una inquietud por la integración de técnicas de
              inteligencia artificial en la automatización y mejora de los
              procesos. Su carrera ha evolucionado desde las posiciones
              puramente técnicas como desarrollador Python, ingeniero de datos y
              científico de datos hacia una orientación a negocio cada vez mayor
              pasando por posiciones como arquitecto de soluciones en preventa
              hasta su rol actual de venta consultiva en estrategia de datos e
              Inteligencia Artificial.
            </p>
            <a
              href="https://www.linkedin.com/in/beatrizinfanzon/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin4"
            >
              Más sobre mí: https://www.linkedin.com/in/pablomgc/
            </a>
          </div>
          <div className="content">
            <img src={PabloManuel} alt="Imagen 4" className="round-image4" />
            <h2 className="name4">PABLO MANUEL GARCIA CORZO</h2>
          </div>
        </div>
        <hr />
        <div className="section5">
          <div className="content">
            <img src={AndresAbad} alt="Imagen 5" className="round-image5" />
            <h2 className="name5">ANDRES ABAD RODRIGUEZ</h2>
          </div>
          <div className="info5">
            <p>
              Ingeniero informático que ha desarrollado la mayor parte de su
              carrera liderando proyectos y servicios de varias áreas en
              organismos internacionales como el CERN, OMS, OMPI y UNICC. Tras
              un breve paso por la Wella Company, compagina la enseñanza de la
              disciplina de transformación digital para los MBA de la IFM
              Business School con su trabajo en
            </p>
            <a
              href="https://www.linkedin.com/in/pablo-viejo/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin5"
            >
              Más sobre mí: https://www.linkedin.com/in/pablo-viejo/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
