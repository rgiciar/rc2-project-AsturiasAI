package org.factoriaf5.backend;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

import org.factoriaf5.backend.Controllers.EmailController;
import org.factoriaf5.backend.models.ContactFormDTO;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@SpringBootTest
class BackendApplicationTests {

	class EmailControllerTest {

		@Mock
		private JavaMailSender emailSender;

		@InjectMocks
		private EmailController emailController;

		public EmailControllerTest() {
			MockitoAnnotations.openMocks(this);
		}

		@Test
		void enviarCorreo_DeberiaEnviarCorreoCorrectamente() {

			ContactFormDTO contactForm = new ContactFormDTO("Juan", "juan@example.com", "Consulta",
					"Hola, esto es una consulta");

			String result = emailController.enviarCorreo(contactForm);

			verify(emailSender, times(1)).send(any(SimpleMailMessage.class));
			assertEquals("Correo enviado correctamente", result);
		}

		@Test
		void enviarCorreo_DeberiaManejarErrorCorrectamente() {

			ContactFormDTO contactForm = new ContactFormDTO("Juan", "juan@example.com", "Consulta",
					"Hola, esto es una consulta");
			doThrow(new RuntimeException("Error al enviar correo")).when(emailSender)
					.send(any(SimpleMailMessage.class));

			String result = emailController.enviarCorreo(contactForm);

			assertEquals("Error al enviar el correo", result);
		}
	}
}
