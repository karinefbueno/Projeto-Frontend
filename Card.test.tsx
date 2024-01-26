import { screen } from '@testing-library/react';
import { renderWithRouter } from './src/utils/renderWithRouter'
import CardProvider from './src/context/CardProvider'
import App from './src/App'

describe('Testes Componente Card ', () => {
  it('Verifica se existe a data nos cards', () => {
    renderWithRouter(<CardProvider><App /></CardProvider>)

    const dataNoticia = screen.getByText(/dias atrás/i)
    expect(dataNoticia).toBeInTheDocument();

  })

  it('Testa se os elemenstos dos cards são renderizados corretamente', async () => {
    renderWithRouter(<CardProvider><App /></CardProvider>);

    expect(screen.getByTestId('notice-title')).toBeInTheDocument();
    expect(screen.getByTestId('notice')).toBeInTheDocument();
    expect(screen.getByTestId('date')).toBeInTheDocument();
    expect(screen.getByTestId('favorite-button')).toBeInTheDocument();
  })

  it('Testa se os elemenstos dos cards são renderizados corretamente', async () => {
    const { user } = renderWithRouter(<CardProvider><App /></CardProvider>);

    const buttonFavorite = screen.getByTestId('favorite-button')
    user.click(buttonFavorite);
  })
})

