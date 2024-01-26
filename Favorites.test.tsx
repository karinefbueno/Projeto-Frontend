import { screen } from '@testing-library/react';
import { renderWithRouter } from './src/utils/renderWithRouter';
import CardProvider from './src/context/CardProvider'
import Favorites from './src/pages/Favorites/Index'

describe('Testes Componente Card ', () => {

  it('Verifica a existência do menu nav', async () => {
    renderWithRouter(<CardProvider><Favorites /></CardProvider>);
    const pagInicial = screen.getByRole('button', {
      name: /página inicial/i
    })
    expect(pagInicial).toBeInTheDocument();

  })

})
