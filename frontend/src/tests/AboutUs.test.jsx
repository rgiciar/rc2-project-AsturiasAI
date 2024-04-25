import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { AboutUs } from "../core/components/AboutUs/AboutUs.jsx";


test('Aparece el nombre de cada uno de los colaboradores', () => {
    render(<AboutUs />);
    expect(screen.getByText('PATRICIA ACEBES TAMARGO')).toBeInTheDocument();
    expect(screen.getByText('BEATRIZ INFANZÓN')).toBeInTheDocument();
    expect(screen.getByText('PABLO VIEJO')).toBeInTheDocument();
    expect(screen.getByText('PABLO MANUEL GARCIA CORZO')).toBeInTheDocument();
    expect(screen.getByText('ANDRES ABAD RODRIGUEZ')).toBeInTheDocument();
});





    