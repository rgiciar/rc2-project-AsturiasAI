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
        <div className="nome-conteiner">
          {/* nombre */}
          <input
            className="form-name"
            type="text"
            {...register("Nombre", {
              required: true,
            })}
          />
          {errors.Name && <span>Titulo requerido</span>}
        </div>
        <div className="email-conteiner">
          <input
            className="form-email"
            type="text"
            {...register("Email", {
              required: true,
            })}
          />
          {errors.Email && <span>Email requerido</span>}
        </div>
        <div className="affair-conteiner">
          <input
            className="form-affair"
            type="text"
            {...register("Asunto")}
          />
        </div>
        <div className="message-conteiner">
          <textarea className="form-message" {...register("message")} />
        </div>
        <button type="submit" className="save-contact">
          Guardar
        </button>
      </form>
    </section>
  );
};
