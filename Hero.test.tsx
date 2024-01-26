import { screen } from '@testing-library/react';
import { renderWithRouter } from './src/utils/renderWithRouter';
import CardProvider from './src/context/CardProvider'
import App from './src/App'

describe('Testes Componente Card ', () => {
    it('Verifica se existe a data nos cards', () => {
        renderWithRouter(<CardProvider><App /></CardProvider>)

        const dataNoticia = screen.getByText(/dias atrás/i)
        expect(dataNoticia).toBeInTheDocument();

    })

})
