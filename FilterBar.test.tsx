import { screen } from '@testing-library/react';
import { renderWithRouter } from './src/utils/renderWithRouter';
import CardProvider from './src/context/CardProvider'
import App from './src/App'

describe('Testes Componente Card ', () => {

  it('Verifica a existência do menu nav', async () => {
    renderWithRouter(<CardProvider><App /></CardProvider>);
    const navegation = screen.getByRole('navigation')
    expect(navegation).toBeInTheDocument();
  })


  it('Verifica os botões do menu', () => {
    renderWithRouter(<CardProvider><App /></CardProvider>)

    const recentes = screen.getByRole('button', {
      name: /mais recente/i
    })
    expect(recentes).toBeInTheDocument();


    const favoritas = screen.getByRole('button', {
      name: /favoritas/i
    })
    expect(favoritas).toBeInTheDocument();


  })
})
