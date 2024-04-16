import "./FormContact.css"

import { useForm } from "react-hook-form";

export const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
   
  };

  return (
    <section className="contact-form-conteiner">
      <form className="form-contact" onSubmit={handleSubmit(onSubmit) }>
        <div className="name-conteiner">
          {/* nombre */}
          <input
            className="form-name"
            placeholder="NOMBRE"
            type="text"
            {...register("Nombre", {
              required: true,
            })}
          />
          {errors.Name && <span>*</span>}
        </div>
        <div className="email-container">
          <input
            className="form-email"
            placeholder="EMAIL"
            type="text"
            {...register("Email", {
              required: true,
            })}
          />
          {errors.Email && <span>*</span>}
        </div>
        <div className="affair-container">
          <input
            className="form-affair"
            placeholder="ASUNTO"
            type="text"
            {...register("Asunto")}
          />
        </div>
        <div className="message-container">
          <textarea placeholder="MENSAJE" className="form-message" {...register("message")} />
        </div>
        <button type="submit" className="send-contact">
          ENVIAR
        </button>
      </form>
    </section>
  );
};
