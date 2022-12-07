import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)