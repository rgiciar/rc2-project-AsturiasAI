import "./FormContact.css";

import { useSubmit } from "@formspree/react";
import { useForm } from "react-hook-form";

export const FormContact = () => {
  const REACT_APP_REACT_HOOK_FORM_ID = import.meta.env.VITE_REACT_HOOK_FORM_ID;
  const {
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
    register,
    setError,
  } = useForm();

  const submit = useSubmit(
    REACT_APP_REACT_HOOK_FORM_ID,

    {
      onError(errs) {
        const formErrs = errs.getFormErrors();
        for (const { code, message } of formErrs) {
          setError(`root.${code}`, {
            type: code,
            message,
          });
        }

        const fieldErrs = errs.getAllFieldErrors();
        for (const [field, errs] of fieldErrs) {
          setError(field, {
            message: errs.map((e) => e.message).join(", "),
          });
        }
      },
    }
  );

  return (
    <section className="contact-form-container">
      {isSubmitSuccessful ? (
        <h2 className="succesfull-send">Enviado Correctamente! 📩 </h2>
      ) : (
        <form className="form-contact" onSubmit={handleSubmit(submit)}>
          <div className="email-container">
            <input
              className="form-email"
              placeholder="EMAIL"
              {...register("email")}
              id="email"
              type="email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="name-container">
            <input
              className="form-name"
              placeholder="NOMBRE"
              {...register("name")}
              id="name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="affair-container">
            <input
              className="form-affair"
              placeholder="ASUNTO"
              {...register("Asunto")}
              id="Asunto"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="message-container">
            <textarea
              className="form-message"
              placeholder="MENSAJE"
              {...register("message")}
              id="message"
              rows={10}
            />
            {errors.message && (
              <p className="error">{errors.message.message}</p>
            )}
          </div>
          {errors.root && (
            <div className="block">
              <ul className="error">
                {Object.values(errors.root).map((err) => {
                  if (typeof err !== "object") {
                    return <li key={err}>{err}</li>;
                  }
                  const { type, message } = err;
                  return <li key={type}>{message}</li>;
                })}
              </ul>
            </div>
          )}
          <button
            className="send-contact"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Enviar"}
          </button>
        </form>
      )}
    </section>
  );
};
