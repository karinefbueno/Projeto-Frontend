import { screen } from '@testing-library/react';
import { renderWithRouter } from './src/utils/renderWithRouter';
import CardProvider from './src/context/CardProvider'
import Header from './src/components/Header/Index';



describe('Testes Componente Header', () => {

  it('Verifica presença do título no Header', () => {
    renderWithRouter(<CardProvider><Header /></CardProvider>)
    expect(screen.getByText(/trybe news/i)).toBeInTheDocument();
  })

  it('Verifica presença da imagem no Header', () => {
    renderWithRouter(<Header />)
    screen.getByRole('img', {
      name: /logo\-trybe/i
    });
  });
});