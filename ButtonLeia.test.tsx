import { screen } from '@testing-library/react';
import { renderWithRouter } from './src/utils/renderWithRouter';
import CardProvider from './src/context/CardProvider'
import App from './src/App'


describe('Testes Componente ButtonLeia', () => {
  it('Verifica presença do botão nos cards', () => {
    renderWithRouter(<CardProvider><App /></CardProvider>)

    const buttonLeia = screen.getByRole('button', {
      name: /Leia a notícia aqui/i,
    });
    expect(buttonLeia).toBeInTheDocument();

  })

  it('Clica no botão', async () => {
    const { user } = renderWithRouter(<CardProvider><App /></CardProvider>);

    const buttonLeia = screen.getByRole('button', {
      name: /Leia a notícia aqui/i,
    });
    await user.click(buttonLeia);


  })
})

