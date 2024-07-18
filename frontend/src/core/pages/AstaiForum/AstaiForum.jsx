import "./AstaiForum.css";
import LogoAstai from "../../assets/images/LogoAstai.png";

export const AstaiForum = () => {
  return (
    <section className="aboutus-container">
      <h1 className="title" id="seccion-about">
        ASTAI FORUM
      </h1>
      <div className="blue-container">
        <article className="member-description">
          <div className="logoAstaiContainer">
            <img src={LogoAstai} alt="AstaiForum" className="logoAstai" />
          </div>
          <div className="member-text">
            <p>
              Los avances en inteligencia artificial (IA) en los últimos años
              están haciendo que el mundo que conocemos evolucione de manera
              exponencial, transformando la realidad que conocemos.
            </p>
            <p>
              El objetivo de Astai Forum es el de elaborar, a través de las
              aportaciones de reputados profesionales de diferentes áreas de
              conocimiento, unas recomendaciones y guías para gobiernos
              regionales sobre cómo se podía beneficiar la región y su
              ciudadanía de la IA y tecnologías relacionadas.
            </p>
            <p>
              Una de las diferencias de esta iniciativa con otras existentes es
              que se afronta el problema desde otras perspectivas, juntando
              talento local y personas de reputación internacional reconocida,
              que están en su mayoría acostumbrados a pensar de manera global.
            </p>
            <p>
              En esta primera fase 2024-2025, en nuestro Think Tank nos
              focalizamos por razones obvias debido a nuestra relación directa
              con la organización que nos acoge, en la región del Principado de
              Asturias, con el objetivo de aprovechar las oportunidades que la
              IA ofrece para mejorar su administración, la vida de sus
              ciudadanos y reducir la brecha digital.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
