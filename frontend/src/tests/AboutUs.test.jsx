import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { AboutUs } from "../core/components/AboutUs/AboutUs.jsx";
import { FormContact } from "../core/components/FormContact/FormContact.jsx";
import userEvent from '@testing-library/user-event';


test('Aparece el nombre de cada uno de los colaboradores', () => {
    render(<AboutUs />);
    expect(screen.getByText('PATRICIA ACEBES TAMARGO')).toBeInTheDocument();
    expect(screen.getByText('BEATRIZ INFANZÓN')).toBeInTheDocument();
    expect(screen.getByText('PABLO VIEJO')).toBeInTheDocument();
    expect(screen.getByText('PABLO MANUEL GARCIA CORZO')).toBeInTheDocument();
    expect(screen.getByText('ANDRES ABAD RODRIGUEZ')).toBeInTheDocument();
});


test('El formulario de contacto envía los datos correctamente', async () => {
    render(<FormContact />);
    
    
    await userEvent.type(screen.getByPlaceholderText('EMAIL'), 'test@example.com');
    await userEvent.type(screen.getByPlaceholderText('NOMBRE'), 'Juan Perez');
    await userEvent.type(screen.getByPlaceholderText('ASUNTO'), 'Consulta General');
    await userEvent.type(screen.getByPlaceholderText('MENSAJE'), 'Hola, quisiera obtener más información acerca de sus servicios.');

    
    await userEvent.click(screen.getByRole('button', { name: 'Enviar' }));

    
    expect(await screen.findByText('Enviado Correctamente! 📩')).toBeInTheDocument();
});


    