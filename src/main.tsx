
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import CardProvider from './context/CardProvider.js'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CardProvider>
      <App />
    </CardProvider>
  </BrowserRouter>

)
