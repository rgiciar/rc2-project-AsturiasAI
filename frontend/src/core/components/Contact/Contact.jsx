import { FormContact } from "../FormContact/FormContact";
import "./Contact.css";

export const Contact = () => {
  return (
    <section className="container-contact">
      <div className="texto-contact">
        <h2 className="title-contact">CONTACTA CON NOSOTROS</h2>
        <p className="info-contact">Si tienes algún comentario, quieres patrocinar ASTURIAS AI, te gustaría dar una charla, no dudes en contactar con nosotros.</p>
      </div>
      <FormContact />
    </section>
  );
};
