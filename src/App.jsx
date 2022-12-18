import './App.css'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
//import useLocalStorage from 'use-local-storage'
import Inicio from './pages/intro/Inicio'
import Personajes from './pages/personajes/Personajes'
import IniciarSesionEmail from './pages/login/IniciarSesion'
import Registro from './pages/login/Registro'

function App() {
  /* const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  } */
  return (
    /*     <div className='App' data-theme={theme}>
           <button onClick={switchTheme}>
        Cambia a modo {theme == 'light' ? 'Noche' : 'Día'}
      </button>
      </div> */
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='iniciar-sesion' element={<IniciarSesionEmail />} />
      <Route path='registro' element={<Registro />} />
      <Route path='dashboard' element={<Personajes />} />
    </Routes>
  )
}

export default App
