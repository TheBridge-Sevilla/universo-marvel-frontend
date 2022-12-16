import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import useLocalStorage from 'use-local-storage'
import FormularioRegistro from './pages/login/FormularioRegistro'
import Inicio from './pages/intro/Inicio'
import { useContextoUsuario } from './context/contextoUsuario'
import Feed from './pages/feed/Feed'
//import IniciarSesion from './pages/login/IniciarSesion'
import NavBar from './components/NavBar'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const {usuario,pantalla, setPantalla} = useContextoUsuario()
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  return (
    <div className='App' data-theme={theme}>
      {usuario ? setPantalla(2) :<></>}
      {!usuario && pantalla === 'inicio' ? <Inicio />: <></>}
      {!usuario && pantalla === 'formulario' ? <FormularioRegistro />: <></>}
      <NavBar />
      {/*       <button onClick={switchTheme}>Cambia a modo {theme == "light" ? "Noche" : "Día"}</button> */}
    </div>
  )
}

export default App
