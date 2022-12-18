import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './i18n'
import { ContextoUsuarioProvider } from './context/contextoUsuario'
import { ContextoAlertProvider } from './context/contextoAlert'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextoUsuarioProvider>
      <ContextoAlertProvider>
        <App />
      </ContextoAlertProvider>
    </ContextoUsuarioProvider>
  </BrowserRouter>
)
