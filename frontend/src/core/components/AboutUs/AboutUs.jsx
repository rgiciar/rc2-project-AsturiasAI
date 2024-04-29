import "../AboutUs/AboutUs.css";

import PatriciaAcebes from "../../assets/images/Patricia_Acebes.jpg";
import BeatrizInfanzon from "../../assets/images/Beatriz_Infanzon.png";
import PabloViejo from "../../assets/images/Pablo_Viejo.jpg";
import PabloManuel from "../../assets/images/Pablo_Manuel.jpg";
import AndresAbad from "../../assets/images/Andres_Abad.png";
import DiegoFernandez from "../../assets/images/Diego_Fernandez.jpg";

export const AboutUs = () => {
  return (
    <section className="aboutus-container">
      <h1 className="title" id="seccion-about">
        QUIENES SOMOS
      </h1>
      <div className="blue-container">
        <article className="member-description">
          <div className="member">
            <img
              src={PatriciaAcebes}
              alt="PatriciaAcebes"
              className="round-image"
            />
            <h2 className="name">PATRICIA ACEBES TAMARGO</h2>
          </div>
          <div className="member-text">
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
              className="linkedin"
            >
              Más sobre Patricia Acebes
            </a>
          </div>
        </article>
        <hr />
        <article className="member-description" id="member-right1">
          <div className="member">
            <img
              src={BeatrizInfanzon}
              alt="BeatrizInfanzon"
              className="round-image"
            />
            <h2 className="name">BEATRIZ INFANZÓN</h2>
          </div>
          <div className="member-text">
            <p>
              Divulgadora y redactora de contenidos tecnológicos. Se ha
              especializado en tecnologías emergentes como blockchain, Web3,
              criptoeconomía, inteligencia artificial, IoT y Big Data.Facilita
              que los términos tecnológicos sean más fáciles de entender a
              través de contenidos, que crea para sus clientes y también para
              sus seguidores. Prueba de ello es Stories from the Web3, un canal
              de Youtube y una newsletter semanal, donde comparte noticias de
              Web3 y todo lo que va descubriendo en su día a día como creadora
              de contenido.
            </p>
            <a
              href="https://www.linkedin.com/in/beatrizinfanzon/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              Más sobre Beatriz Infanzón
            </a>
          </div>
        </article>
        <hr />
        <article className="member-description">
          <div className="member">
            <img src={PabloViejo} alt="PabloViejo" className="round-image" />
            <h2 className="name">PABLO VIEJO</h2>
          </div>
          <div className="member-text">
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
              className="linkedin"
            >
              Más sobre Pablo Viejo
            </a>
          </div>
        </article>
        <hr />
        <article className="member-description" id="member-right2">
          <div className="member">
            <img src={PabloManuel} alt="PabloManuel" className="round-image" />
            <h2 className="name">PABLO MANUEL GARCÍA</h2>
          </div>
          <div className="member-text">
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
              className="linkedin"
            >
              Más sobre Pablo Manuel García
            </a>
          </div>
        </article>
        <hr />
        <article className="member-description">
          <div className="member">
            <img src={AndresAbad} alt="AndresAbad" className="round-image" />
            <h2 className="name">ANDRES ABAD RODRIGUEZ</h2>
          </div>
          <div className="member-text">
            <p>
              Ingeniero informático que ha desarrollado la mayor parte de su
              carrera liderando proyectos y servicios de varias áreas en
              organismos internacionales como el CERN, OMS, OMPI y UNICC. Tras
              un breve paso por la Wella Company, compagina la enseñanza de la
              disciplina de transformación digital para los MBA de la IFM
              Business School con su trabajo en IFM Business School.
            </p>
            <a
              href="https://www.linkedin.com/in/andresabad/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              Más sobre Andrés Abad
            </a>
          </div>
        </article>
        <hr />
        <article className="member-description" id="member-right3">
          <div className="member">
            <img
              src={DiegoFernandez}
              alt="DiegoFernandez"
              className="round-image"
            />
            <h2 className="name">DIEGO FERNÁNDEZ</h2>
          </div>
          <div className="member-text">
            <p>
              Diego Fernández Allende es un arquitecto de software especializado
              en soluciones Azure, con más de dos décadas de experiencia en la
              gestión e implementación de infraestructuras tecnológicas
              avanzadas. Su trabajo en empresas como Willis Towers Watson Iberia
              y Reale Seguros Generales ha demostrado su habilidad para liderar
              proyectos de transformación digital mediante el uso de Microsoft
              Azure, optimizando procesos y mejorando la eficiencia operativa
              desde 2019 hasta la actualidad. A través de su carrera, Diego ha
              sido pionero en la implementación de plataformas Low Code y
              aplicaciones en Power Platform y Power Apps, facilitando procesos
              automatizados y supervisión eficiente en entornos corporativos. Ha
              liderado desarrollos en .NET y Azure, estableciendo soluciones
              híbridas que integran arquitecturas locales y en la nube. Formado
              como Ingeniero Técnico en Informática de Gestión y con un máster
              en Inteligencia Artificial y Big Data, Diego posee numerosas
              certificaciones de Microsoft, incluyendo Azure Architect
              Technologies (AZ-303) y Azure Architect Design (AZ-304), que
              certifican su profundo conocimiento en arquitectura de soluciones
              en la nube. Con un enfoque metodológico basado en prácticas Agile
              y herramientas de DevOps desde principios de su carrera en 2005,
              Diego se centra en la mejora continua y la innovación. Se
              distingue por su capacidad para diseñar e implementar
              arquitecturas tecnológicas que no solo responden a las necesidades
              actuales de las empresas, sino que también proyectan escalabilidad
              y adaptabilidad futura.
            </p>
            <a
              href="https://www.linkedin.com/in/diego-fern%C3%A1ndez-allende-70975345/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              Más sobre Diego Fernández
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
