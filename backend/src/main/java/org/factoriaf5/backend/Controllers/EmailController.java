package org.factoriaf5.backend.Controllers;

import org.factoriaf5.backend.models.ContactFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private JavaMailSender emailSender;

    @PostMapping("/enviar-correo")
    public String enviarCorreo(@RequestBody ContactFormDTO contactForm) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("evapibiyal@gmail.com"); // Reemplaza con tu dirección de correo destino
            message.setSubject("Formulario de contacto");
            message.setText("Nombre: " + contactForm.getNombre() + "\n" +
                    "Correo: " + contactForm.getEmail() + "\n" +
                    "Asunto: " + contactForm.getAsunto() + "\n" +
                    "Mensaje: " + contactForm.getMensaje());
            emailSender.send(message);
            return "Correo enviado correctamente";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error al enviar el correo";
        }
    }
}
