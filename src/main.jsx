import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './components/app/App'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './i18n'
import { ContextoUsuarioProvider } from './context/contextoUsuario'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextoUsuarioProvider>
    <App />
  </ContextoUsuarioProvider>
)
